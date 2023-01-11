
const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const error = document.querySelector('#error');
const listOfNotes = document.querySelectorAll(".notes");
let i = 0;


document.getElementById('check-button').style.display = 'none';
document.getElementById('hide-cash').style.display = 'none';
document.getElementById('hide').style.display = 'none';

// ERROR 
const displayError = (message) => {
    message = '*' + message + "*";
    error.style.display = 'block';
    error.style.color = 'red';
    error.innerHTML = message;
}


// CALCULATE THE CHANGE TO BE RETURNED
const calculateChange = (amount) => {

    const notes = [2000, 500, 100, 20, 10, 5, 1];

    for (i = 0; i < notes.length; i++) {

        let n = Math.trunc(amount / notes[i]);
        if (n == 0)
            listOfNotes[i].innerHTML = "";
        else {

            listOfNotes[i].style.color = '#5cbbeb';
            listOfNotes[i].style.fontSize = '20px';
            listOfNotes[i].innerHTML = n;
            amount = amount % notes[i];
            console.log(amount)
        }

    }

}

// ONCLICK FUNCTION 
checkButton.addEventListener('click', () => {

    error.style.display = 'none';
    document.getElementById('hide').style.display = 'block';

    if (billAmount.value < 0)
        displayError('Invalid Bill Amount');
    else if (isNaN(billAmount.value) == true)
        displayError('bill amount should be a number')

    else {
        if (billAmount.value - cashGiven.value >= 1)
            displayError('Given Cash is 0 or less than Bill amount');

        else {
            let leftAmount = cashGiven.value - billAmount.value;
            calculateChange(leftAmount);
        }
    }
}




);


//oNCLICK  HIDE BUTTON

document.getElementById('hide-button').addEventListener('click', ()=>{

    document.getElementById('hide-cash').style.display = 'block';
    document.getElementById('check-button').style.display = 'block';
    document.getElementById('hide-button').style.display = 'none';
});