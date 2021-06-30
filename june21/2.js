let myblock;
let flag = false;
let fix = {
    x: 0,
    y: 0
}
document.addEventListener('DOMContentLoaded', function(){
    myblock = document.querySelector('.inner');
    document.addEventListener('mousemove', function(e){
        if (flag) {
            myblock.style.left = (e.clientX - fix.x) + 'px';
            myblock.style.top = (e.clientY - fix.y) + 'px';
        }
    });
    myblock.onmousedown = function(e){
        if (!flag) {
            flag = true;
            fix.x = e.clientX - myblock.getBoundingClientRect().x;
            fix.y = e.clientY - myblock.getBoundingClientRect().y;
        }
    };
    document.onmouseup = function(){
        flag = false;
    };
});