$(function($) {
    let modal = '<div class="screen"><div class="modal"><h1>MODAL WINDOW!</h1><div>click me!</div></div></div>';
    $('.screener').click(function(){
        $('.container').append(modal);
        $('.modal > div').on('click', function(){
            $('.screen').remove();
        });
    });
    $('.alerter').click(function(){
        alert('OGOGO!!!');
    });
});