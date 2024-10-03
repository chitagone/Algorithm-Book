const currency = (money) => {
  const china = money * 0.00032;
  const usa = money * 0.000045;
  const thai = money * 0.0015;
  return {
    china,
    usa,
    thai,
  };
};

const money = 1000000;

const result = currency(money);

console.log(result);
