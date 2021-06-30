let myblock;

document.addEventListener('DOMContentLoaded', function(){
    myblock = document.querySelector('.inner');
    myblock.onmouseover = function(e){
        let point = {};
        let a = Math.abs(myblock.getBoundingClientRect().left - e.clientX);
        let b = Math.abs(myblock.getBoundingClientRect().right - e.clientX);
        if (a > b) {
            point.x = -1;
        } else {
            point.x = 1;
        }
        a = Math.abs(myblock.getBoundingClientRect().top - e.clientY);
        b = Math.abs(myblock.getBoundingClientRect().bottom - e.clientY);
        if (a > b) {
            point.y = -1;
        } else {
            point.y = 1;
        }
        myblock.style.left = (myblock.getBoundingClientRect().left + (10 * point.x)) + 'px';
        myblock.style.top = (myblock.getBoundingClientRect().top + (10 * point.y)) + 'px';
    }
});