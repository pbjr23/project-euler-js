function sumOfSquares(n) {
	var answer = 0;
	for (var i = 1; i <= n; i++) {
		answer += i * i;
	}
	return answer;
}

function squareOfSum(n) {
	var raw = 0;
	for (var i = 1; i <= n; i++) {
		raw += i;
	}
	return raw * raw;
}

console.log(squareOfSum(100) - sumOfSquares(100));