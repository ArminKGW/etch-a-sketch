function createGrid(size){
    const div = document.createElement("div");
    div.classList = "item";
    container.appendChild(div);
    div.style.width = (960 / size).toString() + "px";
    div.style.height = (960 / size).toString() + "px";
    return div;
}


function sketch(element, n, flag){
    if(flag === true){
        for(let i = 0; i < n * n; i++){
            element[i].addEventListener("mouseenter", () => {
                element[i].style.backgroundColor = "red";
            });
        }
        return false;
    }
    else{
        for(let i = 0; i < n * n; i++){
            if(element[i].style.backgroundColor != "red"){
                element[i].addEventListener("mouseenter", () => {
                    element[i].style.backgroundColor = "white";
                });
            }
        }
        return true;
    }
}

const container = document.querySelector(".container");
const btn = document.querySelector("button");
let size = 16;
const arr = [];
let temp;
let flag = true;

for(let i = 0; i < size * size; i++){
    arr[i] = createGrid(size);
}

container.addEventListener("click", () => {
    flag = sketch(container.children, size, flag);   
});

btn.addEventListener("click", () => {
    temp = size;
    size = prompt("Enter the size of the grid; it should be at most 100: ");
    if(size == NaN) console.log("XD");
    for(let i = 0; i < temp * temp; i++){
        container.removeChild(arr[i]);
    }
    for(let i = 0; i < size * size; i++){
        arr[i] = createGrid(size);
    }
});


