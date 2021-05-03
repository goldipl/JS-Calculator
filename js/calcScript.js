const btnNr1 = document.querySelector(".nr1");
const btnNr2 = document.querySelector(".nr2");
const btnNr3 = document.querySelector(".nr3");
const btnNr4 = document.querySelector(".nr4");
const btnNr5 = document.querySelector(".nr5");
const btnNr6 = document.querySelector(".nr6");
const btnNr7 = document.querySelector(".nr7");
const btnNr8 = document.querySelector(".nr8");
const btnNr9 = document.querySelector(".nr9");
const btnNr0 = document.querySelector(".nr0");
const btnNumbers = [btnNr1, btnNr2, btnNr3, btnNr4, btnNr5, btnNr6, btnNr7, btnNr8, btnNr9, btnNr0];
const btnAC = document.querySelector(".btn.ac");
const btnDot = document.querySelector(".btn.dot");
const calcDisplay = document.querySelector("input");

//getting number to display
btnNumbers.forEach(button => {
    button.addEventListener("click", () => {
        btnNumber = button.dataset.num;
        calcDisplay.value += btnNumber;
    });
});

//AC Button
btnAC.addEventListener("click", () => {
    calcDisplay.value = '';
});

//dot Button
btnDot.addEventListener("click", () => {
    if (!calcDisplay.value.includes('.')) {
        dotValue = '.';
        calcDisplay.value += dotValue;
    } else {
        return;
    }
});