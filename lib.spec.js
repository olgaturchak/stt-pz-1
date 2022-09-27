const lib = require('./lib');

describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing sum function', () => {
    it('should return sum of two numbers', () => {
      expect(lib.sum(1, 2)).toEqual(3);
      expect(lib.sum(-10, 5)).toEqual(-5);
      expect(lib.sum(-10, 10)).toEqual(0);
    });

    it('should return NaN if one parament is skiped', () => {
      expect(lib.sum(1)).toBe(NaN);
    });


    it('should convert string to number if input parameters is string', () => {
      expect(lib.sum('5', '1')).toEqual(6);
      expect(lib.sum(10, '1')).toEqual(11);
      expect(lib.sum('25', 5)).toEqual(30);
    });
  });

  describe('Test suite for testing subtraction function', () => {
    it('should return subtraction of two numbers', () => {
      expect(lib.subtraction(5, 1)).toEqual(3);
    });
  });
});
