const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let result = [];
  let currentSubarray = [];
  let currentSum = 0;
  let resultIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (currentSum + arr[i] <= n) {
      currentSubarray[currentSubarray.length] = arr[i];
      currentSum += arr[i];
    } else {
      result[resultIndex++] = currentSubarray;
      currentSubarray = [arr[i]];
      currentSum = arr[i];
    }
  }

  if (currentSubarray.length > 0) {
    result[resultIndex] = currentSubarray;
  }

  return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
