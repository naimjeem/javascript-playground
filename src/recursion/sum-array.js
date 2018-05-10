const sumArr = (arr) => {
	if (arr.length === 1) {
		return arr[0];
	} else {
		return arr.pop() + sumArr(arr);
	}
}

const myArr = [1, 2, 3];

console.log(sumArr(myArr));