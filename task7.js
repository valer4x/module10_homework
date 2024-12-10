let testArray = [1, 12, 0, null, 755, "sdfs", 65468569, 1, undefined, "8", 0];

function elementCheck(a) {
    let evenCount = 0,
        oddCount = 0,
        zeroCount = 0,
        zeroElements = [];

    for (var i = 0; i < a.length; i++) {
        if (typeof a[i] == "number") {
            if (a[i] == 0) {
                zeroCount += 1;
                zeroElements.push(++i);
            } else if (a[i] % 2 == 0) {
                evenCount += 1;
            } else if (a[i] % 2 != 0) {
                oddCount += 1;
            }
        }
    }
    if (zeroCount != 0) {
        return `Количество элементов: чётных - ${evenCount}, нечётных - ${oddCount}.\nHулевые элементы - № ${zeroElements}`;
    } else {
        return `Количество элементов: чётных - ${evenCount}, нечётных - ${oddCount}.`;
    }
}

alert(elementCheck(testArray));