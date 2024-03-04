/**
Given five positive integers, find the minimum and maximum values that can be calculated 
by summing exactly four of the five integers. Then print the respective minimum and maximum 
values as a single line of two space-separated long integers.
 */

function miniMaxSum(arr: number[]): void {
  const sortedArray = arr.sort();
  const minArray = sortedArray.slice(0, 4);
  const reversedArray = sortedArray.reverse();
  const maxArray = reversedArray.slice(0, 4);
  let minTotal = 0;
  let maxTotal = 0;

  minArray.forEach((element) => {
    minTotal += element;
  });

  maxArray.forEach((element) => {
    maxTotal += element;
  });

  console.log(`${minTotal} ${maxTotal}`);
}

miniMaxSum([1, 28, 68, 2, 3, 4, 5, 33, 6, 88, 70, 7, 8, 9, 110, 24, 98, 10]);
