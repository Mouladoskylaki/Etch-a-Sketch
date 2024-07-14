const container = document.querySelector(".container");
const resetBtn = document.querySelector(".reset");
const rainbowBtn = document.querySelector(".rainbow");

const randomColor = () => {
    const randomColor1 = Math.floor(Math.random() * 256);
    const randomColor2 = Math.floor(Math.random() * 256);
    const randomColor3 = Math.floor(Math.random() * 256);
    let finalColor = `rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`;
    return finalColor;
}

let divs = [];

const divCreator = () => {
for (let i = 0; i <= 255; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("nested-divs")
    divs.push(newDiv)
    }
console.log(divs)
divs.forEach((item) => {
    container.appendChild(item);
    item.addEventListener("mouseover", () => {
        item.style.backgroundColor = "grey";
    })
})
}

const reset = () => {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild)
    }
    divs = [];
    let newBoard = parseInt(prompt("enter a number of squares"));
    console.log(newBoard);
    const firstnewBoard = newBoard;
    newBoard = newBoard * newBoard;
    for (let i = 1; i <= newBoard; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("nested-divs");
        divs.push(newDiv)
    }
    console.log(divs);
    divs.forEach((item) => {
        container.appendChild(item);
        item.style.backgroundColor = "white";
        item.style.flex = `1 0 calc(100% / ${firstnewBoard})`;
        item.style.height = `calc(100% / ${firstnewBoard})`;
        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = "grey";
        })

        
    })
}
resetBtn.addEventListener("click", reset);

const rainbow = () => {
    divs.forEach((item) => {
        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = randomColor();
        })
    })
}
rainbowBtn.addEventListener("click", rainbow);


divCreator()



