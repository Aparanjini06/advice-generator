const title = document.querySelector("h2");
const text = document.querySelector("p");
const button = document.querySelector("button");
async function getAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice", {
    cache: "no-store"
  });
  const data = await response.json();

  title.innerText = "Advice #" + data.slip.id;
  text.innerText = data.slip.advice;
}


button.addEventListener("click", getAdvice);
getAdvice();
