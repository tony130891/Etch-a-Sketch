const container = document.querySelector(".container");
const btnInput = document.querySelector(".btnInput");

const squares = 0;
function row() {
  for (let i = 0; i < squares; i++) {
    let div = document.createElement("div");
    div.classList.add("row");
    container.appendChild(div);
  }
}

container.addEventListener("mouseover", (e) => {
  e.target.classList.replace("row", "changed");
});

btnInput.addEventListener("click", () => {
  let input = prompt("how many squares do you want?");
});
