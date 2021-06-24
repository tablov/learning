/*
---1) делаем поле ввода даты
---2) рядом делаем кнопку
---3) по клику на кнопке или в поле ввода создаем попап (всплывающее окно)
---    3.1) по клику вызываем функцию
---    3.2) функция делает попап
4) в попапе делаем календарь
    4.1) устанавливаем дату сегодня
    4.2) определяем месяц
    4.3) определяем количество недель в месяце, начальную и конечную даты страницы
    4.4) создаем страницу таблицей
    4.5) добавляем строку дней недели
    4.6) делаем заголовок (месяц и год)
    4.7) делаем кнопки перехода
        4.7.1) на месяц назад и вперед - выполняем снова пункт 4
    4.8) вставляем готовый календарь в попап
    4.9) подключаем обработку событий
5) по выбору даты закрываем календарь и вставляем дату в поле ввода
    5.1) ловим событие на дне
    5.2) вставляем дату в поле ввода
    5.3) уничтожаем попап с календарем.
*/
$(function(){
    $('input, button').click(makePopup);
    //$(document).on('click', '.active', function(){
    $('.screen').click(function(e){
        if ($(e.target).hasClass('active')) {
            $('.active').removeClass('active');
        }
    });
});
const MONTHNAMES = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь',]
function makePopup(){
    let today = new Date();
    let my_year = today.getFullYear();
    let my_month = today.getMonth();
    let my_weekday = new Date(my_year, my_month)).getDay();
    let month_length = Math.floor((new Date(my_year, my_month + 1) - new Date(my_year, my_month)) / (1000 * 60 * 60 * 24));
    let prev_days = ((my_weekday + 6) % 7;
    let weeks = Math.ceil((month_length + prev_days) / 7);

    let str = '<div class="header">' + MONTHNAMES[my_month] + ' ' + my_year + '</div>';
    
    str += '<table><tr><th>Пн</th><th>Вт</th><th>Ср</th><th>Чт</th><th>Пт</th><th class="holiday">Сб</th><th class="holiday">Вс</th></tr>';
    for (let i = 0; i < weeks; i++) {
        str += '<tr>';
        for (let j = 0; j < 7; j++) {
            let x;
            let y;
            str += '<td class="' + x + '">' + y + '</td>';
        }
        str += '</tr>';
    }
    str += '</table>';
    
    str += '<div class="footer"></div>';
    
    $('.modal').html(str);

    $('.screen').addClass('active');
}