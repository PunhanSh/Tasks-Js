document.querySelector(".all").style.display = "flex";

let box1 = document.getElementById("box1");
box1.style.padding = "5px";
box1.style.width = "300px";
box1.style.height = "200px";
box1.style.background = "orange";
box1.style.border = "3px solid green";
box1.innerText = "box1";


let box1s = document.getElementById("box1s");
box1s.style.marginLeft = "20px"
box1s.style.padding = "5px";
box1s.style.width = "300px"
box1s.style.height = "200px";
box1s.style.border = "3px solid red";
box1s.innerText = "box1s";
let p = document.createElement("P");
let text = document.createTextNode("hi");
p.appendChild(text);
box1s.appendChild(p);
p.style.paddingLeft = "10px";
p.style.fontSize = "40px";

let box2 = document.getElementById("box2");
box2.style.marginLeft = "20px";
box2.style.marginTop = "100px"
box2.style.padding = "5px";
box2.style.width = "100px"
box2.style.height = "100px";
box2.style.border = "3px solid green";
box2.innerText = "box2";

let empty = document.getElementById("empty");
empty.style.marginLeft = "20px"
empty.style.padding = "5px";
empty.style.width = "300px"
empty.style.height = "200px";
empty.style.border = "3px solid red";