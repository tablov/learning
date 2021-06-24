const MONTHNAMES = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь',];
const TODAY = new Date();
// заменить TODAY на дату из инпута, если она там есть
//let birthday = null;
function makePopup(my_year, my_month){
    let my_weekday = new Date(my_year, my_month).getDay();
    let month_length = Math.floor((new Date(my_year, my_month + 1) - new Date(my_year, my_month)) / (1000 * 60 * 60 * 24));
    let prev_days = (my_weekday + 6) % 7;
    let weeks = Math.ceil((month_length + prev_days) / 7);

    let str = '<div class="header">';
    str += '<span class="left">&#171;</span>';
    str += '<b>' + MONTHNAMES[my_month] + ' ' + my_year + '</b>';
    str += '<span class="right">&#187;</span>';
    str += '</div>';
    
    str += '<table><tr><th>Пн</th><th>Вт</th><th>Ср</th><th>Чт</th><th>Пт</th><th class="holiday">Сб</th><th class="holiday">Вс</th></tr>';
    for (let i = 0; i < weeks; i++) {
        str += '<tr>';
        for (let j = 0; j < 7; j++) {
            let x = '';
            let y = (j + (i * 7)) + 1;
            let z = my_year + ',' + my_month + ',';
            if ((y < prev_days + 1) || (y > prev_days + month_length)) {
                y = '';
                x = 'noourmonth';
            } else {
                y -= prev_days;
                z += y;
                if (j > 4)  {
                    x = 'holiday';
                } else {
                    x = 'workday';
                }
                if ((y == TODAY.getDate()) && (my_year == TODAY.getFullYear()) && (my_month == TODAY.getMonth())) {
                    x += ' today';
                }
// Здесь добавляем пометку своего дня рождения классом 'birthday'
            }
            str += '<td class="' + x + '" data-date="' + z + '">' + y + '</td>';
        }
        str += '</tr>';
    }
    str += '</table>';
    
    str += '<div class="footer"></div>';
    
    $('.modal').html(str);
    
    $('.header span').click(function(){
        let a = my_year;
        let b = my_month;
        if ($(this).hasClass('left')) {
            b--;
        } else {
            b++;
        }
        if (b < 0) {
            b += 12;
            a--;
        } else if (b > 11) {
            b -= 12;
            a++;
        }
        makePopup(a, b);
    });
    
    $('.holiday, .workday').click(function(){
        let arr = this.dataset.date.split(',');
        arr[1] = +arr[1] + 1;
        if (arr[1] < 10) arr[1] = '0' + arr[1];
        if (arr[2].length < 2) arr[2] = '0' + arr[2];
        let str = arr[2] + '-' + arr[1] + '-' + arr[0];
        $('input').val(str);
        $('.active').removeClass('active');
        $('.modal').empty();
    });
    
    $('.screen').addClass('active');
}
$(function(){
    $('input, .getcalendar').click(function(){
        makePopup(TODAY.getFullYear(),TODAY.getMonth());
    });
    $('button.birthday').click(function(){
       // спросить у пользователя день его рождения в формате ДД-ММ-ГГГГ
       // преобразовать его в Date и сохранить его в переменную birthday
    });
    $('.screen').click(function(e){
        if ($(e.target).hasClass('active')) {
            $('.active').removeClass('active');
            $('.modal').empty();
        }
    });
});
