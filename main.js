const colorPicker = document.querySelector("input[type = 'color']");
const modePicker = document.getElementById("mode-picker");
const submitButton = document.getElementById("submit-button");

const colorOne = document.getElementById("color-1");
const colorTwo = document.getElementById("color-2");
const colorThree = document.getElementById("color-3");
const colorFour = document.getElementById("color-4");
const colorFive = document.getElementById("color-5");

const labels = [...document.getElementsByClassName("label")];

const labelOne = document.getElementById("label-1");
const labelTwo = document.getElementById("label-2");
const labelThree = document.getElementById("label-3");
const labelFour = document.getElementById("label-4");
const labelFive = document.getElementById("label-5");

const getModedHex = (hex) => {
  return [...hex].splice(1).join("");
}

function copy(hex) {
  hex.select();
  document.execCommand("copy");
}

for (let label of labels) {
  label.addEventListener("click", (e) => {copy(e.target)})
}

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  let seedHex = getModedHex(colorPicker.value);
  let mode = modePicker.value;
  const count = 5;

  fetch(`https://www.thecolorapi.com/scheme?hex=${seedHex}&mode=${mode}&count=${count}`)
  .then(response => response.json())
  .then(data => {
    // Color One
    colorOne.style.backgroundColor = data.colors[0].hex.value;
    labelOne.value = data.colors[0].name.closest_named_hex;
    // Color Two
    colorTwo.style.backgroundColor = data.colors[1].hex.value;
    labelTwo.value = data.colors[1].name.closest_named_hex;
    // Color Three
    colorThree.style.backgroundColor = data.colors[2].hex.value;
    labelThree.value = data.colors[2].name.closest_named_hex;
    // Color Four
    colorFour.style.backgroundColor = data.colors[3].hex.value;
    labelFour.value = data.colors[3].name.closest_named_hex;
    // Color Five
    colorFive.style.backgroundColor = data.colors[4].hex.value;
    labelFive.value = data.colors[4].name.closest_named_hex;
  })
})
