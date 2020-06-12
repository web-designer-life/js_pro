let text;

text = prompt('Введите аргумент');
console.log(omg(text));

function omg(text) {
    if (typeof text !== 'string') {
        return ('В качестве аргумента передана не строка');
    }
    text = text.trim(); 
    if (text.length > 50) {
        return text.slice(0, 50) + '...';
    } else {
        return text;
    }
}

