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
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let today = new Date().getDay();
    let hour, minute, second;

    if (today == 0) {
        today = 6;
    } else {
        today -= 1;
    }
    
    if (h == 1 || h == 21) {
        hour = ' час ';
    } else if (h == 2 || h == 3 || h == 4 || h == 22 || h == 23 || h == 24) {
        hour = ' часа ';
    } else {
        hour = ' часов ';
    }

    if (m == 1 || m == 21 || m == 31 || m == 41 || m == 51) {
        minute = ' минута ';
    } else if (m == 2 || m == 3 || m == 4 || m == 22 || m == 23 || m == 24 || m == 32 || m == 33 || m == 34 || m == 42 || m == 43 || m == 44 || m == 52 || m == 53 || m == 54 ) {
        minute = ' минуты ';
    } else {
        minute = ' минут ';
    }

    if (s == 1 || s == 21 || s == 31 || s == 41 || s == 51) {
        second = ' секунда ';
    } else if (s == 2 || s == 3 || s == 4 || s == 22 || s == 23 || s == 24 || s == 32 || s == 33 || s == 34 || s == 42 || s == 43 || s == 44 || s == 52 || s == 53 || s == 54 ) {
        second = ' секунды ';
    } else {
        second = ' секунд ';
    }

    document.getElementById("p1").innerHTML = ('Сегодня ' + week[today] + ', ' + d.getDay() + ' ' + month[d.getMonth()] + ' ' + d.getFullYear() + ' года, ' + h + hour + d.getMinutes() + minute + d.getSeconds() + second);
}

setInterval(function() {
    dateString();
    formatDate();
}, 100);