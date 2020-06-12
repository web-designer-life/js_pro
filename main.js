let language;
let lang;

var array = [];
array['ru'] = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];
array['en'] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

language = confirm('Язык английский?');

if (language) {
    lang = 'en';
} else {
    lang = 'ru';
}

if (lang == 'en') {
    console.log('Monday');
    console.log('Tuesday');
    console.log('Wednesday');
    console.log('Thursday');
    console.log('Friday');
    console.log('Saturday');
    console.log('Sunday');
} else {
    console.log('Понедельник');
    console.log('Вторник');
    console.log('Среда');
    console.log('Четверг');
    console.log('Пятница');
    console.log('Суббота');
    console.log('Воскресенье');
}

console.log('');

switch (lang) {
    case 'en':
        console.log('Monday');
        console.log('Tuesday');
        console.log('Wednesday');
        console.log('Thursday');
        console.log('Friday');
        console.log('Saturday');
        console.log('Sunday');
        break;
    case 'ru':
        console.log('Понедельник');
        console.log('Вторник');
        console.log('Среда');
        console.log('Четверг');
        console.log('Пятница');
        console.log('Суббота');
        console.log('Воскресенье');
        break;
}

console.log('');

console.log(array[lang]);

