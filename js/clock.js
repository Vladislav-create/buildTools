import {soundPlay} from './sound.js';
import {printOutput} from './output.js';

var timer;

export function stop() {
    clearInterval(timer);
}

export function clock() {
    var sec = 0;
    var min = 0;
    let userTime = document.getElementById('userTime').value;
    if(min < 10) {
        min = '0' + min;
        } 
    timer = setInterval(() => {
        printOutput(min + ':' + sec);
        if((min + ':' + sec) == userTime) {
        stop();
        //Добавление звука  
        soundPlay();
        //Добавление звука
    }
       if (sec === 60){
        sec = 0;
        min ++;
        if(min < 10) {
            min = '0' + min;
            }   
    }  else sec ++;
        if(sec < 10) {
            sec = '0' + sec;
        }           
    }, 1000);      
}

