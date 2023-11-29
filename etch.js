const output = document.querySelector(".container");
const box = document.querySelector(".box");

function row() {
  for (let i = 0; i < 16; i++) {
    let div = document.createElement("div");
    div.classList.add("row");
    box.appendChild(div);
  }
}
row();
