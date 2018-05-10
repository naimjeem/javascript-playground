const fromInt = (starNum, endNum) => {
	if (endNum - starNum === 2 ) {
		return [starNum + 1];
	} else {
		const list = fromInt(starNum, endNum - 1);
		list.push(endNum - 1);
		return list;
	}
}

console.log(fromInt(1, 21));