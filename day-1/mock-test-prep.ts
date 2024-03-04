/**
 *
 *  FizzBuzz Challenge
    For multiples of 3, print "Fizz" instead of the number.
    For multiples of 5, print "Buzz" instead of the number.
    For numbers that are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
    For all other numbers, print the number itself.
 */

function FizzBuzz(number: number): void {
  for (let i = 1; i < number + 1; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0 && i % 5 != 0) {
      console.log("Fizz");
    } else if (i % 3 != 0 && i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

FizzBuzz(15);
