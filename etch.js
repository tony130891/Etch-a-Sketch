const container = document.querySelector(".container");
const btnInput = document.querySelector(".btnInput");

const squares = 0;
function row(squares) {
  for (let i = 0; i < squares; i++) {
    let div = document.createElement("div");
    div.classList.add("row");
    let div1 = document.querySelector(".row");
    container.appendChild(div);

    div.addEventListener("mouseover", () => {
      div.classList.replace("row", "changed");
      div.style.backgroundColor = colorChanger();
    });
  }
}

btnInput.addEventListener("click", () => {
  let input = prompt("how many squares do you want?");
  let nums = new RegExp(/^\d+$/);
  if (input > 230) {
    prompt("Squares must be numbers and not be greater than 230");
  }
  row(input);
});

function resetDiv() {
  window.location.reload();
}

function colorChanger() {
  let R = Math.floor(Math.random() * 256);
  let G = Math.floor(Math.random() * 256);
  let B = Math.floor(Math.random() * 256);
  let randomcolor = "rgb(" + R + "," + G + "," + B + ")";
  return randomcolor;
}
