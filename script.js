let initialValue = 7

function incrementValue() {
  initialValue = initialValue + 1
}

document.getElementById("display").innerHTML = initialValue;

const incrementButton = document.getElementById('increment')
incrementButton.addEventListener('click', incrementValue())