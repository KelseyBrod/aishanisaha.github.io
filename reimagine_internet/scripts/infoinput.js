
    const x = document.getElementById("inform").elements;
    var user = x[0].value;
  

    function myFunction() {
        document.getElementById("demo").innerHTML = "Welcome " + x[0].value + "!";
        console.log(x[0].value)
        window.localStorage.setItem('nam', x[0].value);
    }

    function getName() {
        document.getElementById("myname").innerHTML =  window.localStorage.getItem('nam');
    }


    
// Attempt to get object to move
    // var objImage = null;
    // function init() {
    //     objImage = document.getElementById("image1");
    //     objImage.style.position = "relative";
    //     objImage.style.left = "0px";
    //     objImage.style.top = "0px";
    // }
    // function getKeyAndMove(e) {
    //     var key_code = e.which || e.keyCode;
    //     switch (key_code) {
    //         case 37: //left arrow key
    //             moveLeft();
    //             break;
    //         case 38: //Up arrow key
    //             moveUp();
    //             break;
    //         case 39: //right arrow key
    //             moveRight();
    //             break;
    //         case 40: //down arrow key
    //             moveDown();
    //             break;
    //     }
    //     console.log(objImage);

    // }




    // function moveLeft() {
    //     objImage.style.left = parseInt(objImage.style.left) - 5 + "px";
    //     console.log(yes)
    // }
    // function moveUp() {
    //     objImage.style.top = parseInt(objImage.style.top) - 5 + "px";
    // }
    // function moveRight() {
    //     objImage.style.left = parseInt(objImage.style.left) + 5 + "px";
    // }
    // function moveDown() {
    //     objImage.style.top = parseInt(objImage.style.top) + 5 + "px";
    // }
    // window.onload = init;












