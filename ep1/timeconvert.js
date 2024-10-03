const timeConvert = (mili) => {
  const second = Math.floor(mili / 60);
  const hour = Math.floor(second / 60);

  const result = `this is a second ${second} amd this is a hour ${hour}`;

  return result;
};

const mili = 120;

const result = timeConvert(mili);

console.log(result);
