const evenSum = (number) => {
  const eventNum = number.filter((n) => n % 2 === 0);

  const result = eventNum.reduce((a, b) => a + b, 0);

  return result;
};

const number = [1, 1, 3, 4, 5, 6, 7, 8, 9, 1, 0, 1, 1, 2, 5, 5, 8, 5, 8];

const result = evenSum(number);

console.log(result);
