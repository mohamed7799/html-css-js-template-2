"use strict"

//variables
let imgs = ["0%", "100%", "200%"];
let btns = document.getElementById("btns");
let dots = [...document.getElementsByClassName("dot")];
let imgS = document.getElementById("img-slide");
let index = 0;
let downLink = document.getElementById("down-link");
//functions

let move = function (index) {
    imgS.style.transform = `translateX(-${imgs[index]})`;
    dots.forEach((ele) => {
        ele.classList.remove("dot-selected")
    })
    dots[index].classList.add("dot-selected");
}

function scrollTo(element) {
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: element.offsetTop
    });
}


//event

btns.addEventListener("click", (e) => {
    if (e.target.id === "inc-js") {
        index++;
        if (index >= imgs.length) {
            index = 0;
        }
        move(index);
    }
    else {
        index--;
        if (index < 0) {
            index = imgs.length - 1;
        }
        move(index);
    }
})

downLink.addEventListener('click', () => {
    scrollTo(document.getElementById("down"));
});


