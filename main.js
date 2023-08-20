let button = document.getElementById("btn");
let qouteText = document.querySelector("#quote");
let authorText = document.querySelector("#author");
let tagsText = document.querySelector("#tags");

const getData = async () => {
  const response = await fetch("http://quotable.io/random");
  const data = await response.json();
  qouteText.innerText = data.content;
  authorText.innerText = data.author;
  tagsText.innerText = data.tags;
};

button.addEventListener("click", getData);


// setInterval(() => {
//   getData();
// }, 7000);
