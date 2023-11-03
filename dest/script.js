"use strict";
const menu = document.querySelector(".menu");
const ul = document.querySelector("ul");
if (menu) {
    menu.addEventListener("click", () => {
        if (ul.style.display === "none" || ul.style.display === "") {
            ul.style.display = "block";
        }
        else {
            ul.style.display = "none";
        }
    });
}
const header = document.querySelector('header');
const headerHeight = header.clientHeight;
document.body.style.paddingTop = headerHeight + 'px';
