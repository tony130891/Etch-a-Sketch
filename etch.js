const container = document.querySelector(".container");

function row() {
  for (let i = 0; i < 273; i++) {
    let div = document.createElement("div");
    div.classList.add("row");
    container.appendChild(div);
  }
}
row();
