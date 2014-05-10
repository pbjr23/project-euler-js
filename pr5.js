function divisibleByFirstTwenty(n) {
    if (n === 0) {
        return false;
    }
    for (var i = 1; i <= 20; i++) {
        if (n % i !== 0) {
            return false;
        }
    }
    return true;
}

function factorial(n) {
    if (n === 1) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}

function pr5() {
    var max = factorial(20);
    for (var i = 0; i < max; i += 20) {
        if (divisibleByFirstTwenty(i)) {
            return i;
        }
    }
    return max;
}

console.log(pr5());
