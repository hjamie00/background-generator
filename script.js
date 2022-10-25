// firstColorInput.addEventListener("input", setGradient);
// secondColorInput.addEventListener("input", setGradient);

// function setGradient() {
//     // set background linear gradient colors from user input colors
//     // display css linear-gradient values on web page as text in h3 of html doc
// }

var cssText = document.querySelector("h3");
var color1_input = document.querySelector(".color1");
var color2_input = document.querySelector(".color2");
var body = document.querySelector("#gradient");
var randomButton = document.querySelector("#randomButton");
// check the selected elements
// console.log(cssText);
// console.log(color1_input);
// console.log(color2_input);
// console.log(body);
// console.log(randomButton);

// Display initial css linear gradient property on page load
setGradientColors();

color1_input.addEventListener("input", setGradientColors);

color2_input.addEventListener("input", setGradientColors);

// which css property&value makes the background gradient?
    // Under body element selector:
    // background: linear-gradient(to right, red, yellow);
function setGradientColors() {
    // console.log(color1_input.value);
    // body.style.background = "red";
    body.style.background = "linear-gradient(to right, " 
    + color1_input.value
    + ", "
    + color2_input.value
    + ")";

    cssText.textContent = body.style.background;
    // cssText.innerText = body.style.background + ";";
}

/**************************************
 * Add random button that generates two randomly changes background gradient colors
 * *************************************/
// Alternate function for randomColor (but avoided using loop as much as possible)
// other alt functions for creating hexadecimal colors is in README doc
// function randomColor() {
//     var color = " ";
//     while (color.length < 7) {
//         color = "#" + Math.floor(Math.random() * 16777215).toString(16);
//     }
//     return color;
// }

function randomColor() {
    color = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
    return color;
}

randomButton.addEventListener("click", setRandomGradient);

function setRandomGradient() {
    color1_input.value = randomColor();
    color2_input.value = randomColor();
    setGradientColors();
}