let week = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];
let today = new Date().getDay();
if (today == 0) {
    today = 6;
} else {
    today -= 1;
}
for (let i = 0; i < week.length; i++) {
    if (i != today) {
        if (i == 5 || i == 6) {
            document.write(week[i].italics() + '<br>');
        } else {
            document.write(week[i] + '<br>');
        }
    } else {
        document.write(week[i].bold() + '<br>');
    }
}