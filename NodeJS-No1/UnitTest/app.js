const assert = require("chai").assert;
const Calculator = require("../Calculator"); // mengimport kelas Calculator

describe("Calculator", function () {
  describe("division()", function () {
    it("should return 5 when passed 10 and 2", function () {
      assert.equal(Calculator.division(10, 2), 5);
    });

    it("should return Infinity when passed 10 and 0", function () {
      assert.equal(Calculator.division(10, 0), Infinity);
    });
  });

  describe("subtraction()", function () {
    it("should return 8 when passed 10 and 2", function () {
      assert.equal(Calculator.subtraction(10, 2), 8);
    });

    it("should return -8 when passed 2 and 10", function () {
      assert.equal(Calculator.subtraction(2, 10), -8);
    });
  });

  describe("multiplication()", function () {
    it("should return 20 when passed 10 and 2", function () {
      assert.equal(Calculator.multiplication(10, 2), 20);
    });

    it("should return 0 when passed 10 and 0", function () {
      assert.equal(Calculator.multiplication(10, 0), 0);
    });
  });

  describe("addition()", function () {
    it("should return 12 when passed 10 and 2", function () {
      assert.equal(Calculator.addition(10, 2), 12);
    });

    it("should return -8 when passed -10 and 2", function () {
      assert.equal(Calculator.addition(-10, 2), -8);
    });
  });
});
