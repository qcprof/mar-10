let initialValue = 0

document.getElementById("display").innerHTML = initialValue;

function incrementValue() {
  initialValue = initialValue + 1
  document.getElementById("display").innerHTML = initialValue;
}

function decrementValue() {
  initialValue = initialValue - 1
  document.getElementById("display").innerHTML = initialValue;
}


const incrementButton = document.getElementById('increment')
incrementButton.addEventListener('click', incrementValue)

const decrementButton = document.getElementById('decrement')
decrementButton.addEventListener('click', decrementValue)
