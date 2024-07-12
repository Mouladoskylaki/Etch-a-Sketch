const container = document.querySelector(".container");

const divCreator = () => {
let divs = [];
for (let i = 0; i <= 255; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("nested-divs")
    divs.push(newDiv)
    }
console.log(divs)
divs.forEach((item) => {
    // item.textContent = ".";
    container.appendChild(item);
    item.addEventListener("mouseover", () => {
        item.style.backgroundColor = "white";
    })
})
}
divCreator()


