const checkNum = (n) => {
	if (n < 0) {
		n = Math.abs(n);
	} 

	if (n === 0) { return 'Even'; }

	if (n === 1) { return 'Odd'; }
	
	else {
		n = n - 2;
		return checkNum(n);
	}
}

console.log(checkNum(23423));