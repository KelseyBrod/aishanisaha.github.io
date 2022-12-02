const movsquare = document.querySelector('.movsquare');
const section1 = document.querySelector('.section1');
const fullscreen = document.querySelector('.fullscreen');
const whybackg = document.querySelectorAll('.whybackg');


window.addEventListener('scroll', ()=> {
    const scrolled = window.pageYOffset;
    const val = scrolled * 0.5;
    movsquare.style.transform = 'translateX('+val+'px)';
    movsquare.style.borderRadius = .65*val + 'px';
    movsquare.style.height = 1.4*val + 'px';
    movsquare.style.width = 1.4*val + 'px';
    movsquare.style.fontSize = 0.2*val + 'px';   
    console.log(scrolled);

    const position = movsquare.getBoundingClientRect();

    if(position.left <= 1400) {
        document.body.style.backgroundColor = "white";
        fullscreen.style.visibility = "hidden";
        movsquare.style.color = 'white';
        whybackg.style.visibility = "hidden";

    }
    if (position.left >= 1400 ) {
        movsquare.style.height = '100vh';
        movsquare.style.width = '100vh';
        movsquare.style.color = 'blue';
        document.body.style.backgroundColor = "blue";
        fullscreen.style.visibility = "visible";
        whybackg.style.visibility = "visible";
    }
    
});



