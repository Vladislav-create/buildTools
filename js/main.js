import { printOutput, printDatesDiff } from "./output.js";
import getDatesDiff from "./getDateDiff.js";

const form = document.getElementById('calcDate')

form.onsubmit = (event) => {
    event.preventDefault();

    const {firstDate, secondDate} = form.elements;

    if (!firstDate.value || !secondDate.value){
        printOutput('Введите даты!!!');

        return;
    }

    const dateDiff = getDatesDiff({from: firstDate.value, to: secondDate.value});

    printDatesDiff(dateDiff);
}