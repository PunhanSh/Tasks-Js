// console.log(document.querySelector("input").value);


let newvalue = document.querySelector('input');

document.querySelector("button").addEventListener("click", (e) => {
    e.preventDefault();
    console.log(newvalue.value);
})