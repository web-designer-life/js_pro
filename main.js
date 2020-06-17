let week = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];
let month = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];

function formatDate() {
    let date = new Date();
    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
  
    let mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
  
    let yy = date.getFullYear();

    let hh = date.getHours();
    if (hh < 10) hh = '0' + hh;

    let mi = date.getMinutes();
    if (mi < 10) mi = '0' + mi;
    
    let se = date.getSeconds();
    if (se < 10) se = '0' + se;
    
    document.getElementById("p2").innerHTML = (dd + '.' + mm + '.' + yy + ' - ' + hh + ':' + mi + ':' + se);
}

function dateString() {
    let d = new Date();
    let h = new Date().getHours();
    let today = new Date().getDay();

    if (today == 0) {
        today = 6;
    } else {
        today -= 1;
    }
    
    if (h == 1 || h == 21) {
        document.getElementById("p1").innerHTML = ('Сегодня ' + week[today] + ', ' + d.getDay() + ' ' + month[d.getMonth()] + ' ' + d.getFullYear() + ' года, ' + h + ' час ' + d.getMinutes() + ' минут ' + d.getSeconds() + ' секунды');
    } else if (h == 2 || h == 3 || h == 4 || h == 22 || h == 23 || h == 24) {
        document.getElementById("p1").innerHTML = ('Сегодня ' + week[today] + ', ' + d.getDay() + ' ' + month[d.getMonth()] + ' ' + d.getFullYear() + ' года, ' + h + ' часа ' + d.getMinutes() + ' минут ' + d.getSeconds() + ' секунды'); 
    } else {
        document.getElementById("p1").innerHTML = ('Сегодня ' + week[today] + ', ' + d.getDay() + ' ' + month[d.getMonth()] + ' ' + d.getFullYear() + ' года, ' + h + ' часов ' + d.getMinutes() + ' минут ' + d.getSeconds() + ' секунды');
    }
}

setInterval(function() {
    dateString();
    formatDate();
}, 100);