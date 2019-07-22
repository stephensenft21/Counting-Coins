/*
  Input: 0.67
  Output:
  {
    quarters: 3,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

function coinCounter () {
    // Initialize a JavaScript object to hold the coins
    var coinPurse = {
        quarters: 3,
        dimes: 1,
        nickels: 1,
        pennies: 2

    };
    
    coinPurse.quarters = 4;
  
    return coinPurse;
  }
  
  var coins = coinCounter()
  console.log(coins);