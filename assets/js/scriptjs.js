// get field content with (id)
let currentNumnerWrapper = document.querySelector('#curentNumber');
let out = document.getElementById('out');

currentNumner = 0;
// declare function
function increment() {
    currentNumner = currentNumner + 1;
    document.getElementById('curentNumber').innerHTML = currentNumner;
    if(currentNumner > 10) {
        document.getElementById('out').innerText = "The number is greater than 10";
    }
}

function decrement() {
    currentNumner = currentNumner - 1;
    document.getElementById('curentNumber').innerHTML = currentNumner;
    if(currentNumner < 0) {
        document.getElementById('out').innerText = "The count is decreasing...";
    }
}

currentNumner.addEventListener('click', increment);
currentNumner.addEventListener('click', decrement);