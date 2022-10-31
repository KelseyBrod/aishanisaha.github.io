//setting initial count
let count = 0;

//select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')) {
            count--;
        }
        else if(styles.contains('increase')){
            count++;
        }
        else{
            count = 0;
        }
        if(count > 0) {
            value.style.color = 'green';
        }
        if(count < 0) {
            value.style.color = 'red';
        }
        if(count == 0){
            value.style.color = 'black';
        }
        value.textContent = count;
    })
});

/* tried to make a theme changing button - did not work, but do not want to throw away code

function togglefun() {
    var toggle = document.getElementsById("toggle").getAttribute("style");
    if (toggle == "transform: translateX(0px);") {
        document.getElementById("toggle").style.transform = "translateX(60px)";
        document.getElementById("body").style.backgroundColor = "black";
        document.getElementById("body").style.color = "black";
    }
    else{
        document.getElementById("toggle").style.transform = "translateX(0px)";
        document.getElementById("body").style.backgroundColor = "white";
        document.getElementById("body").style.color = "white"; 
    }
} */


