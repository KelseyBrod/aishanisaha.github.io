const movsquare = document.querySelector('.movsquare');
const section1 = document.querySelector('.section1');
const fullscreen = document.querySelector('.fullscreen');
const container = document.querySelectorAll('.container');
const fleximage = document.querySelectorAll('.fleximage');


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
        //you need to iterate through all the elements with the class name using a for loop
    }


    // basic parallax if you want to play around with it
    //  var coords = ((scrolled* 0.5)) + 'px';
    //  console.log("coords" + coords);
    //  console.log(fleximage.length);

    //  for(i=0; i<fleximage.length; i++){
    //      fleximage[i].style.transform = 'translateY('+ coords + ')';
        
    //      }


}
);


  















// const movsquare = document.querySelector('.movsquare');
// const section1 = document.querySelector('.section1');
// const fullscreen = document.querySelector('.fullscreen');
// const whybackg = document.querySelectorAll('.whybackg');


// window.addEventListener('scroll', ()=> {
//     const scrolled = window.pageYOffset;
//     const val = scrolled * 0.5;
//     movsquare.style.transform = 'translateX('+val+'px)';
//     movsquare.style.borderRadius = .65*val + 'px';
//     movsquare.style.height = 1.4*val + 'px';
//     movsquare.style.width = 1.4*val + 'px';
//     movsquare.style.fontSize = 0.2*val + 'px';   
//     console.log(scrolled);

//     const position = movsquare.getBoundingClientRect();

//     if(position.left <= 1400) {
//         document.body.style.backgroundColor = "white";
//         fullscreen.style.visibility = "hidden";
//         movsquare.style.color = 'white';
//         whybackg.style.visibility = "hidden";

//     }
//     if (position.left >= 1400 ) {
//         movsquare.style.height = '100vh';
//         movsquare.style.width = '100vh';
//         movsquare.style.color = 'blue';
//         document.body.style.backgroundColor = "blue";
//         fullscreen.style.visibility = "visible";
//         whybackg.style.visibility = "visible";
//     }
    
// });



