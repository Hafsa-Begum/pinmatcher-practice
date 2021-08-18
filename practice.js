function getPin() {
    const pin = Math.round(Math.random() * 10000);
    console.log(pin);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}
function generatePin() {
    document.getElementById('generate-pin').value = getPin();
}
document.getElementById('keypad').addEventListener('click', function (event) {

    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
})
function verifyPin() {
    const pin = document.getElementById('generate-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    let notifyFail = document.getElementById("notify-fail");
    console.log(typedNumbers);
    let notifySuccess = document.getElementById('notify-success');
    if (typedNumbers == pin) {
        notifyFail.style.display = 'none';
        notifySuccess.style.display = 'block';
    }
    else {
        notifyFail.style.display = 'block';
        notifySuccess.style.display = 'none';
    }
}