function reverse(str) {
    return str.split('').reverse().join('');
}

let input = prompt('Введите текст');
alert(reverse(input));