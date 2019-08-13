
// Counting Coins

// Write a program that will convert a dollar amount to the number of coins that make up the amount.
// Use the common American coins of quarters, dimes, nickels, and pennies.

/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }
*/

function coinCounter (x) {
  // Initialize an empty JavaScript object to hold the coins
  let coinPurse = {};
  //use . notation to give money zero ammounts
  coinPurse.quarters = 0;
  coinPurse.dimes = 0;
  coinPurse.nickels = 0;
  coinPurse.pennies = 0;
//declare "ammount asd "
  let amount = x;

  coinPurse.quarters = Math.floor(amount / .25);
  amount = amount - (coinPurse.quarters * .25);
  console.log(amount)
  coinPurse.dimes = Math.floor(amount / .10);
  console.log(amount)
  amount = amount - (coinPurse.dimes * .10);
  console.log(amount)
  coinPurse.nickels = Math.floor(amount / .05);
  console.log(amount)
  amount = amount - (coinPurse.nickels * .05);
  console.log(amount)
  coinPurse.pennies = Math.floor(amount / .01);
  console.log(amount)
  amount = amount - (coinPurse.pennies * .01);

  console.log(amount);

  return coinPurse;
}

let coins = coinCounter(.56)
console.log(coins);


