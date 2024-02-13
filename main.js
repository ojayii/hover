const rand = (max) => {
    let val = Math.floor((Math.random() * max) + 1);
    return val;
}

// console.log(rand(255));

for( let i = 0; i < 45; i++  ) {

 let box;
 box = document.createElement("div");
 box.className = "box";
 
 let container = document.querySelector(".container");
 container.appendChild(box);
 
 const enter = () => {
    return box.style.backgroundColor= `rgb(${rand(255)}, ${rand(255)}, ${rand(255)})`;
}

const leave = () => {
    return box.style.backgroundColor= "";
} 
 
 box.addEventListener("mouseenter", enter)
 box.addEventListener("mouseleave", leave)
 
// enter()
}
