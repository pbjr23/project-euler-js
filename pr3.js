function isPrime(n) {
    if (n % 2 === 0) {
        return false;
    }
    for (var i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function largestPrimeFactor(n) {
    var max = 0;
    for (var i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0 && isPrime(i)) {
            if (i > max) {
                max = i;
            }
        }
    }
    return max;
}

console.log(largestPrimeFactor(600851475143));
