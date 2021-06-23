$(function(){
    $('.block1').click(function(){
        alert('Привет!');
    });
    $('.block2').click(function(){
        $(this).hide(5000);
    });
    $('.block3').click(function(){
        $(this).css('position','absolute')
            .animate({
                top: '+=500',
                left: '+=500'
            }, 5000)
            .hide(5000);
    });
});