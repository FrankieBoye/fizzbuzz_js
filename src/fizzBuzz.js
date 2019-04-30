function isDivisbleByThree(num) {
  return num % 3 === 0;
}

function isDivisbleByFive(num) {
  return num % 5 === 0;
}

function isDivisbleByFifteen(num) {
  return num % 15 === 0;
}

function fizzBuzz(num) {
  if(isDivisbleByFifteen(num)) {return 'FizzBuzz'}
  else if(isDivisbleByFive(num)) {return 'Buzz'}
  else if(isDivisbleByThree(num)) {return 'Fizz'}
}
