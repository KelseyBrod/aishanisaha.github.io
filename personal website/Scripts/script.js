const movsquare = document.querySelector('.movsquare');
const section = document.querySelector('.section');
const fullscreen = document.querySelector('.fullscreen');
const why = document.querySelector('.why');


window.addEventListener('scroll', ()=> {
    const position = movsquare.getBoundingClientRect();
    if(position.left <= 850) {
        document.body.style.backgroundColor = "white";
        fullscreen.style.visibility = "hidden";
        movsquare.style.color = 'white';
        why.style.visibility = "hidden";

    }
    if (position.left >= 850) {
        movsquare.style.height = '100vh';
        movsquare.style.width = '100vh';
        movsquare.style.color = 'blue';
        document.body.style.backgroundColor = "blue";
        fullscreen.style.visibility = "visible";
        why.style.visibility = "visible";

    }
    const scrolled = window.pageYOffset;
    const val = scrolled * 0.5;
    movsquare.style.transform = 'translateX('+val+'px)';
    movsquare.style.borderRadius = .7*val + 'px';
    movsquare.style.height = 1.4*val + 'px';
    movsquare.style.width = 1.4*val + 'px';
    movsquare.style.fontSize = 0.2*val + 'px';
    
});



