let bgImages=['natural1.jpg', 'natural3.jpg', 'natural2.jpg', 'natural4.jpg', 'natural5.jpg', 'natural7.jpg'];

// Select landing-area element
let landingArea=document.querySelector(".landing-area");

setInterval(() => {
    // Get random index from array
    let randomBgIndex=Math.floor(Math.random()*bgImages.length);

    // Get random bg Url
    let randomBgUrl=bgImages[randomBgIndex];

    landingArea.style.backgroundImage=`url(${randomBgUrl})`;
    console.log();
}, 2000);


// Start menu links
// Select menu links element 
let menuLinks=document.querySelector(".menu-links");

// Select ul links
let ulLinks=document.querySelector(".links");


menuLinks.onclick=function (e) {
    // Stop propagation
    e.stopPropagation();
    ulLinks.classList.toggle("open-links");
};

document.addEventListener("click", function (e) {
    if(e.target!==menuLinks&&e.target!==ulLinks) {
        if(ulLinks.classList.contains("open-links")) {
            ulLinks.classList.remove("open-links");
        }
    }
});

// OR Close MenuLinks BY clicking ESC Button From Keyboard
document.onkeydown=function (e) {
    if(e.keyCode==27) {
        ulLinks.classList.remove("open-links");
    }
};
// Stop menuLinks Propagation
ulLinks.onclick=function (e) {
    e.stopPropagation();
};