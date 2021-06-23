$(function(){
    $('.inner').on('mouseover',function(e){
        moveIt(e,this);
    });
})

function moveIt(event,ball){
    let point = {
        x: 0,
        y: 0
    };
    console.log(point);
    let qx = ball.getBoundingClientRect().left;
    let qy = ball.getBoundingClientRect().top;
    let ex = event.clientX;
    let ey = event.clientY;
    let a = Math.abs(qx - ex);
    let b = Math.abs(qx + $(ball).width() - ex);
    if (a > b) {
        point.x = -100;
    } else if (b > a) {
        point.x = 100;
    }
    a = Math.abs(qy - ey);
    b = Math.abs(qy + $(ball).height() - ey);
    if (a > b) {
        point.y = -100;
    } else if (b > a) {
        point.y = 100;
    }
    //console.log(point);
    $(ball).animate({
        'left': '+=' + point.x,
        'top': '+=' + point.y
    },500);
    //$(ball).css('left', qx + (100 * point.x) + 'px');
    //$(ball).css('top', qy + (100 * point.y) + 'px');
}