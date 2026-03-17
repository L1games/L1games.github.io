const frbtn = document.getElementById("frbtn");
const abutton1 = document.getElementById("abutton1");
const abutton2 = document.getElementById("abutton2");
const abutton3 = document.getElementById("abutton3");
const abutton4 = document.getElementById("abutton4");

frbtn.addEventListener("click", function () {
    abutton1.classList.toggle("ab1nh");
    abutton2.classList.toggle("ab2nh");
    abutton3.classList.toggle("ab3nh");
    abutton4.classList.toggle("ab4nh");
});