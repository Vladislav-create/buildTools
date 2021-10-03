import { printOutput, printDatesDiff } from "./output.js";
import getDatesDiff from "./getDateDiff.js";
import { invisible } from "./invisible.js";
import {clock, stop} from "./clock.js";

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

document.querySelector('.click').addEventListener('click', invisible);
document.querySelector('.clicks').addEventListener('click', invisible);
document.querySelector('.btn-start').addEventListener('click', clock);
document.querySelector('.btn-stop').addEventListener('click', stop);