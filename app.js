const button = document.querySelector("#btn")
const h1 = document.querySelector("h1");

btn.addEventListener("click", function() {
    const newColor = makeRandomColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})


const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

const buttons = document.querySelectorAll("button")

for ( let button of buttons) {
    button.addEventListener("click", colorize)
}

function colorize() {
    this.style.backgroundColor = makeRandomColor();
    this.style.color = makeRandomColor();
    this.style.borderColor = makeRandomColor();
}


window.addEventListener("keydown", function(e) {
    console.log(e.code)
})
