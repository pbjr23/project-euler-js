function isPalindrome(n) {
    n = n.toString();
    return n === n.split("").reverse().join("");
}

function pr4() {
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

console.log(pr4());