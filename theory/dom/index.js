let element = document.querySelector("#box");

element.innerText = "Updated Text";
// element.classList.add("new-class");

element.style.backgroundColor = "red";
element.style.padding = "10px";
element.style.color = "white";
element.style.borderRadius = "10px";

const btn = document.createElement("button");
btn.innerText = "Click me";
document.body.appendChild(btn);


btn.addEventListener("click" , () => {
    btn.innerText = "clicked"
})

// console.log(element.innerHTML);
