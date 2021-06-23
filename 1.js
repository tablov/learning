//console.log($('*'));

$(function($) {
    //console.log($('*'));
    $('.container > div').each(function(){
        alert($(this).css('backgroundColor'))
    });
    let a = document.querySelector('.container');
    /*
    $(a).animate({
        opacity: 0.25,
    }, 500, function() {
        alert('animated!')
    });
    */
    
    $(a).on('click',function(e){
        console.log(e.target);
    });
    
    //$('.container>div').hide(5000);
    
});