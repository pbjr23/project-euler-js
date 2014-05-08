function fibonacci(n) {
    var i = 0;
    var memo = {0: 1, 1: 1};
    var sum = 0;
    while (memo[i] < n) {
        var first = memo[i];
        var second = memo[i + 1];
        var next = first + second;
        if (next % 2 === 0 && next < n) {
            sum += next;
        }
        memo[i + 2] = next;
        i++; 
    }
    console.log(sum);
}

fibonacci(4000000);
