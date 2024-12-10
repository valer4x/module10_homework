/* для примера я присвоил переменной булевое значение true 
(подразумервается, что значение переменной х будет вычислено заранее) */

let x = true;

switch (typeof x) {
    case "string":
        console.log('x - это строка');
        break;
    case "boolean":
        console.log('x - это булевое значение');
        break;
    case "number":
        console.log('x - это число');
        break;
    default:
        console.log('Тип x не определен');
}