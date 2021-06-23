$(function($) {
    let myobj = {
        modal: '{"code":200,"success":true,"message":"Операция выполнена успешно!"}',
        medal: '{"code":300,"success":false,"message":"Операция не выполнена!"}',
        mindal: '{"code":500,"success":false,"message":"У нас забастовка!"}',
    }    
    let arr = ['modal', 'medal', 'mindal']
    
    $('.screener').click(function(){
        let cnt = Math.floor(Math.random() * 3);
        makeModal(myobj[arr[cnt]]);
    });
    $('.alerter').click(function(){
        alert('OGOGO!!!');
    });
});

function makeModal(data){
    str = '<div class="screen"><div class="modal"><h1></h1><p></p><div>click me!</div></div></div>';
    $('.container').append(str);
    $('.modal > div').on('click', function(){
        $('.screen').remove();
    });
    let d = JSON.parse(data);
    if (d.success) {
        $('h1').html('SUCCESS!');
    } else {
        $('h1').html('ERROR!');
    }
    $('p').html(d.message);
}