// document.querySelector(".button1 button").style.marginTop = "120px"
let li1 = document.querySelectorAll(".dropdown-menu li");

for (let i = 0; i < li1.length; i++) {

    li1[i].addEventListener("click", e => {

        document.querySelector(".dropdown-menu").removeChild(li1[i])


    })
}

// let index = 0;

// for (let i = 0; i < li1.length; i++) {
//     document.querySelector(".button1 button").addEventListener("click", () => {
//         document.querySelector(".dropdown-menu").removeChild(li1[index])
//     })
// }

// index++;