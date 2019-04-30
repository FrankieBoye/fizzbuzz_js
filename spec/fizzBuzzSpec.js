describe('fizzBuzz', function() {

  var fizzBuzz;

  describe('knows when a number is', function() {

      it('is divisible by 3', function() {
      expect(isDivisbleByThree(3)).toBe(true);
    });

    it('is divisible by 5', function() {
      expect(isDivisbleByFive(5)).toBe(true);
    });

    it('is divisible by 3 & 5', function() {
      expect(isDivisbleByFifteen(15)).toBe(true);
    });

  });

});

  describe('Fizzbuzz gameplay', function() {
    it('fizzes for 3', function() {
      expect(fizzBuzz(3)).toEqual('Fizz');
    });

    it('buzzes for 5', function() {
    expect(fizzBuzz(5)).toEqual('Buzz');
    });

    it('FizzBuzzes for 15', function() {
    expect(fizzBuzz(15)).toEqual('FizzBuzz');
    });
});
