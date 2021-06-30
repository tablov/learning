let timer = null;
let myblock;
let interval_desk = null;

document.addEventListener('DOMContentLoaded', function(){
    myblock = document.querySelector('.inner');
    myblock.onclick = function() {
        if (!interval_desk && !timer) {
            timer = new Date();
            interval_desk = setInterval(function(){
                let a = new Date();
                timefunc(a);
            },10);
        } else if (interval_desk && timer) {
            clearInterval(interval_desk);
            interval_desk = null;
        } else {
            timer = null;
            myblock.innerHTML = '0:00:00.000'
        }
    }
});
function timefunc(arg) {
    let timecount = arg - timer;
    let ms = timecount % 1000;
    if (ms < 100) {
        ms = '0' + ms;
    }
    if (ms.length < 3) {
        ms = '0' + ms;
    }
    timecount = Math.floor(timecount / 1000);
    let sec = timecount % 60;
    if (sec < 10) {
        sec = '0' + sec;
    }
    timecount = Math.floor(timecount / 60);
    let minutes = timecount % 60;
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    timecount = Math.floor(timecount / 60);
    myblock.innerHTML = timecount + ':' + minutes + ':' + sec + '.' + ms;
}