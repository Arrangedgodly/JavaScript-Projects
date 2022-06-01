let coins = [
  ["QUARTER", 25],
  ["DIME", 10],
  ["NICKEL", 5],
  ["PENNY", 1],
];
let bills = [
  ["HUNDRED", 100],
  ["TWENTY", 20],
  ["TEN", 10],
  ["FIVE", 5],
  ["ONE", 1],
];

function checkCoins(value, coinValue) {
  let tempValue = 0;
  if ((value * 100) % coinValue >= 0) {
    tempValue = (value * 100 - ((value * 100) % coinValue)) / 100;
    return tempValue;
  } else {
    return 0;
  }
}

function checkBills(value, billValue) {
  let tempValue = 0;
  if (value % billValue >= 0) {
    tempValue = value - (value % billValue);
    return tempValue;
  } else {
    return 0;
  }
}

function checkChange(value, cid) {
  let tempValue = value;
  let valueTracker = [];
  for (let i = 0; i <= 4; i++) {
    if (
      checkBills(tempValue, bills[i][1]) > 0 &&
      cid[cid.length - 1 - i][1] >= checkBills(tempValue, bills[i][1])
    ) {
      valueTracker.push([bills[i][0], checkBills(tempValue, bills[i][1])]);
      tempValue = tempValue - checkBills(tempValue, bills[i][1]);
    } else if (checkBills(tempValue, bills[i][1]) == 0) {
      valueTracker.push([bills[i][0], 0]);
    }
  }
  for (let i = 0; i <= 3; i++) {
    if (
      checkCoins(tempValue, coins[i][1]) > 0 &&
      cid[cid.length - 6 - i][1] >= checkCoins(tempValue, coins[i][1])
    ) {
      valueTracker.push([coins[i][0], checkCoins(tempValue, coins[i][1])]);
      tempValue = tempValue - checkCoins(tempValue, coins[i][1]);
    } else if (checkCoins(tempValue, coins[i][1]) == 0) {
      valueTracker.push([coins[i][0], 0]);
    }
  }
  return valueTracker;
}

function checkCashRegister(price, cash, cid) {
  let change = 0;
  let cidArray = [];
  if (cash - price > 0) {
    change = cash - price;
    let changeAmounts = checkChange(change, cid);
    for (let i = 0; i < cid.length; i++) {
      cidArray.push(
        cid[cid.length - (1 - i)][1] -
          changeAmounts[changeAmounts.length - (1 - i)][1]
      );
    }
    let totalTracker = 0;
    for (let j = 0; j < cidArray.length; j++) {
      if (cidArray[j][1] < 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
      } else if (cidArray[j][1] == 0) {
        totalTracker += 1;
      }
    }
    if (totalTracker == 9) {
      return { status: "CLOSED", change: cid };
    } else {
      return { status: "OPEN", change: cidArray };
    }
  }
}

//console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

console.log(checkChange(657.89, 1575.93));
//console.log(checkChange(0.5));
