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
    let my_weekday = today.getDay();
    let weeks = monthLength(my_month, my_year);
    
    let str = '<div class="header">' + MONTHNAMES[my_month] + ' ' + my_year + '</div><table>';
    str += '<tr><th>Пн</th><th>Вт</th><th>Ср</th><th>Чт</th><th>Пт</th><th class="holiday">Сб</th><th class="holiday">Вс</th></tr>';
    for (let i = 0; i < weeks; i++) {
        str += '<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>';
    }
    str += '</table><div class="footer"></div>';
    
    
    $('.modal').html(str);
    
    
    
    
    
    // получить и сохранить сегодняшнюю дату
    // создать верстку попапа
    // вставить верстку в страницу
    // подключить события
    $('.screen').addClass('active');
}
function monthLength(month, year){
    let a = new Date(year, month);
    let b = new Date(year, month + 1);
    let c = Math.floor((b - a) / (1000 * 60 * 60 * 24));
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(a.getDay());
    if (!a.getDay()) {
        c += 6;
    } else {
        c += a.getDay() - 1;
    }
    let weeks = Math.floor(c / 7);
    if (c % 7) {
        weeks += 1;
    }
    return weeks;
}