// AOS.init();

AOS.init({
    offset: 200,
    duration: 600,
    easing: "ease-in-sine",
    delay: 100,
});

window.addEventListener("scroll", function () {
    let nav = document.getElementById("nav");
    let windowPosition = window.scrollY > 50;
    if (windowPosition) {
        nav.classList.add("navScrolling");
    } else {
        nav.classList.remove("navScrolling");
    }
});

let options = {
    strings: ["Frontend Developer"],
    typeSpeed: 60,
    backSpeed: 45,
    loop: true,
};
let typed = new Typed(".typed", options);
let mode = document.getElementById("mode");
mode.onclick = () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        mode.innerHTML=`<i class="fas fa-2x fa-sun"></i>`
    } else {
        mode.innerHTML=`<i class="fas fa-2x fa-moon"></i>`
    }
};