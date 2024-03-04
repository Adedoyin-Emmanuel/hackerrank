/***
 *
 * Mock Test
 *
 * Find the median of a given array of numbers.
 */

function findMedian(numbers: number[]) {
  const newArray = numbers.splice(1);
  const sortedArray = newArray.sort();

  console.log(sortedArray);
  let median = 0;

  const isEven = sortedArray.length % 2 == 0;

  if (!isEven) {
    let index = sortedArray.length / 2;
    median = sortedArray[Math.floor(index)];
    console.log(median);
  } else {
    let index1 = sortedArray.length / 2 - 1;
    let index2 = sortedArray.length / 2;

    let average = (index1 + index2) / 2;

    median = sortedArray[Math.floor(average)];

    console.log(median);
  }
}

findMedian([5, 2, 3, 1, 6, 6]);
