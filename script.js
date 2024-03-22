const container = document.querySelector(".container");
const btn = document.querySelector(".size-change");
const leftColors = document.querySelector(".left");
const rightColors = document.querySelector(".right");
const clear = document.querySelector(".clear");
const colorsNodeList = document.querySelectorAll(".color");
const colors = Array.from(colorsNodeList);
for(let i = 0; i < 6; i++) colors[i].textContent.toLowerCase();
let size = 16;
const arr = [];
let temp;
let flag = true;
let color;

for(let i = 0; i < size * size; i++){
    arr[i] = createGrid(size);
}

leftColors.addEventListener("click", (e) => {
    color = e.target.textContent.toLowerCase();
});

rightColors.addEventListener("click", (e) => {
    color = e.target.textContent.toLowerCase();
});

clear.addEventListener("click", () => {
    for(let i = 0; i < size * size; i++){
        arr[i].style.backgroundColor = "white";
    }
});

container.addEventListener("click", () => {
    flag = sketch(container.children, size, flag, color);   
});

btn.addEventListener("click", () => {
    temp = size;
    size = prompt("Enter the size of the grid; it should be at most 100: ");
    for(let i = 0; i < temp * temp; i++){
        container.removeChild(arr[i]);
    }
    for(let i = 0; i < size * size; i++){5
        arr[i] = createGrid(size);
    }
});

function createGrid(size){
    const div = document.createElement("div");
    div.classList = "item";
    container.appendChild(div);
    div.style.width = (680 / size).toString() + "px";
    div.style.height = (680 / size).toString() + "px";
    return div;
}


function sketch(element, n, flag, color){
    if(flag === true){
        for(let i = 0; i < n * n; i++){
            element[i].addEventListener("mouseenter", () => {
                console.log(element[i].style.backgroundColor);
                element[i].style.backgroundColor = color;
            });
        }
        return false;
    }
    else{
        for(let i = 0; i < n * n; i++){
            if(!(element[i].style.backgroundColor in colors)){
                element[i].addEventListener("mouseenter", () => {
                    element[i].style.backgroundColor = "white";
                });
            }
        }
        return true;
    }
}




