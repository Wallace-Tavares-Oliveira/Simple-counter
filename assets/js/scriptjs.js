// get field content with (id)
let currentNumnerWrapper = document.querySelector('#curentNumber');

currentNumner = 0;
// declare function
function increment() {
    
    currentNumner = currentNumner + 1;
    document.getElementById('curentNumber').innerHTML = currentNumner;
}

function decrement() {
    currentNumner = currentNumner - 1;
    document.getElementById('curentNumber').innerHTML = currentNumner;
}

currentNumner.addEventListener('click', increment);
currentNumner.addEventListener('click', decrement);