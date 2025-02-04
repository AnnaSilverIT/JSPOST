const paragraph = document.getElementById('paragraph')
const inputTitle = document.getElementById('inputTitle')
const inputPost = document.getElementById('inputPost')
const button = document.getElementById('submitButton')

async function fetchPost(data) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response;
}

button.addEventListener("click", function (event) {
  event.preventDefault();

  const putData = {
    title: inputTitle.value,
    body: inputPost.value,
  };

  fetchPost(putData)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      return createPost(data);
    })
    .catch((error) => (paragraph.textContent = `${error}`));
});

function createPost(data) {
  let div = document.createElement("div");
  let title = document.createElement("h2");
  let bodyPost = document.createElement("p");
  title.classList.add("titlePost");
  bodyPost.classList.add("bodyPost");
  div.classList.add("post");
  div.append(title, bodyPost);
  title.textContent = data.title;
  bodyPost.textContent = data.body;
  paragraph.append(div);
}
