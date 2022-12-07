const movsquare = document.querySelector('.movsquare');
const section1 = document.querySelector('.section1');
const fullscreen = document.querySelector('.fullscreen');
const container = document.querySelectorAll('.container');
const fleximage = document.querySelectorAll('.fleximage');


//need to set values for on load
fullscreen.style.visibility = "hidden";

movsquare.style.borderRadius = .65 + 'px';
movsquare.style.height = 1.4 + 'px';
movsquare.style.width = 1.4  + 'px';
movsquare.style.fontSize = 0.2 + 'px';


window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const val = scrolled * 0.5;
    movsquare.style.transform = 'translateX(' + val + 'px)';
    movsquare.style.borderRadius = .65 * val + 'px';
    movsquare.style.height = 1.4 * val + 'px';
    movsquare.style.width = 1.4 * val + 'px';
    movsquare.style.fontSize = 0.2 * val + 'px';
    console.log(scrolled);


    const position = movsquare.getBoundingClientRect();
    console.log("left" + position.left);


    if (position.left <= 600) {
        document.body.style.backgroundColor = "white";
        fullscreen.style.visibility = "hidden";
        movsquare.style.color = 'white';
        container.style.visibility = "hidden";

    }
    if (position.left >= 600) {
        movsquare.style.height = '100vh';
        movsquare.style.width = '100vh';
        movsquare.style.color = 'rgb(0, 153, 255)';
        document.body.style.backgroundColor = "rgb(0, 153, 255)";
        fullscreen.style.visibility = "visible";
        for(i=0; i>=container.length; i++){
        container[i].style.visibility = "visible";
        }
    }
}
);

function newPage() {
    window.location.href= "../personal website/Pages/scrollnarrative.html";
}



