class SmartCalculator {
  constructor(initialValue) {
    this.result = initialValue.toString();
  }

  add(number) {
    this.result += "+" + number.toString();
    return this;
  }
  
  subtract(number) {
    this.result += "-" + number.toString();
    return this;
  }

  multiply(number) {
    this.result += "*" + number.toString();
    return this;
  }

  devide(number) {
    this.result += "/" + number.toString();
    return this;
  }

  pow(number) {
    this.result += "**" + number.toString();
    return this;
   
  }

  valueOf(number) {
    return eval(this.result);
  }
}

module.exports = SmartCalculator;
