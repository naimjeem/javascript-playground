const exponent = (num, exp) => {
	if (exp === 0) {
		return 1;
	} else {
		return num * exponent(num, exp - 1);
	}
}

console.log(exponent(4, 3));