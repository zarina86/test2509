class RandomInteger {

  generateRandomInteger(value) {
    return Math.floor(Math.random() * value);
  }
}

export default new RandomInteger;
