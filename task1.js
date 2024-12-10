let value = prompt();
let x = +value;

if (Number.isNaN(x) || value == "" || value == "null") {
    console.log("Упс, кажется, вы ошиблись");
} else if (typeof x === "number") {
    if (x % 2 == 0) {
        console.log("Четное");
    } else {
        console.log("Нечётное");
    }
}