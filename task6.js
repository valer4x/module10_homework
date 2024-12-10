let testArray = [1, 1, 1, 1, 1, 1, 1];

function elementCheck(a) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] !== a[0]) return false;
    }
    return true;
}

alert(elementCheck(testArray));