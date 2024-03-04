/**
        Submissions	Leaderboard	Discussions	Editorial
        Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

        Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.
 */

function plusMinus(arr: number[]): void {
  // Write your code here
  const arrayLength = arr.length;
  let positiveCounter = 0;
  let negativeCounter = 0;
  let zeroCounter = 0;

  arr.forEach((number) => {
    if (number > 0) positiveCounter++;
    if (number < 0) negativeCounter++;
    if (number == 0) zeroCounter++;
  });

  console.log(positiveCounter / arrayLength);
  console.log(negativeCounter / arrayLength);
  console.log(zeroCounter / arrayLength);
}

plusMinus([1, -3, -4, 12, 7, -5, 0, 8, 34, 28]);
