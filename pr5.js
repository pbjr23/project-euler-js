function divisibleByFirstTwenty(n) {
    for (var i = 1; i <= 20; i++) {
        if (n % i !== 0) {
            return false;
        }
    }
    return true;
}

function pr5() {
    var max = 0;
    for (var i = 1; i < 1000; i++) {
        for (var j = 1; j < 1000; j++) {
            if (isPalindrome(i * j) && i * j > max) {
                max = i * j;
            }
        }
    }
    return max;
}

console.log(divisibleByFirstTwenty(121645100408832000));