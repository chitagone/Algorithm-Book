function calculateChange(money_given, money_to_pay) {
  // If the money given is less than the money to pay, no change required
  if (money_given < money_to_pay) {
    return "The customer did not give enough money!";
  }

  // Calculate the change
  let change = money_given - money_to_pay;

  // Define available denominations
  const denominations = [100, 50, 20, 10, 5, 1];

  // Object to store how many of each denomination are used
  let changeBreakdown = {};

  // Iterate over each denomination
  for (let denom of denominations) {
    if (change >= denom) {
      // Calculate how many bills/coins of this denomination are needed
      changeBreakdown[denom] = Math.floor(change / denom);
      // Subtract that amount from the total change
      change %= denom;
    }
  }

  return { changeBreakdown };
}

// Example usage:
const moneyGiven = 300;
const moneyToPay = 176;
const result = calculateChange(moneyGiven, moneyToPay);

console.log(`Change:`, result);

// Output:
// Change: { '100': 1, '20': 1, '1': 4 }
// 124
/*
selectionSort([64, 25, 12, 22, 11])
|
├── Iteration 1 (i = 0)
│   ├── Assume minIdx = 0 (64)
│   ├── Compare with 25 (j = 1)
│   │   └── 25 < 64 → Update minIdx = 1
│   ├── Compare with 12 (j = 2)
│   │   └── 12 < 25 → Update minIdx = 2
│   ├── Compare with 22 (j = 3)
│   │   └── 22 >= 12 → No update
│   ├── Compare with 11 (j = 4)
│   │   └── 11 < 12 → Update minIdx = 4
│   └── Swap 64 with 11
│       └── Array state: [11, 25, 12, 22, 64]
|
├── Iteration 2 (i = 1)
│   ├── Assume minIdx = 1 (25)
│   ├── Compare with 12 (j = 2)
│   │   └── 12 < 25 → Update minIdx = 2
│   ├── Compare with 22 (j = 3)
│   │   └── 22 >= 12 → No update
│   ├── Compare with 64 (j = 4)
│   │   └── 64 >= 12 → No update
│   └── Swap 25 with 12
│       └── Array state: [11, 12, 25, 22, 64]
|
├── Iteration 3 (i = 2)
│   ├── Assume minIdx = 2 (25)
│   ├── Compare with 22 (j = 3)
│   │   └── 22 < 25 → Update minIdx = 3
│   ├── Compare with 64 (j = 4)
│   │   └── 64 >= 22 → No update
│   └── Swap 25 with 22
│       └── Array state: [11, 12, 22, 25, 64]
|
├── Iteration 4 (i = 3)
│   ├── Assume minIdx = 3 (25)
│   ├── Compare with 64 (j = 4)
│   │   └── 64 >= 25 → No update
│   └── No swap needed
│       └── Array remains: [11, 12, 22, 25, 64]
|
└── Iteration 5 (i = 4)
    ├── Assume minIdx = 4 (64)
    └── No comparisons needed (already the last element)
    └── No swap needed
        └── Array remains: [11, 12, 22, 25, 64]

*/
