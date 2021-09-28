import { printOutput } from "./output.js";

const form = document.getElementById('calcDate')

form.onsubmit = (event) => {
    event.preventDefault();

    const {firstDate, secondDate} = form.elements;

    if (!firstDate.value || !secondDate.value){
        printOutput('Введите даты!!!');
    }

    
}