function checkQuarters(value) {
  let tempValue = 0;
  if (value % 0.25 >= 0) {
    tempValue = value - (value % 0.25);
    return tempValue;
  } else {
    return 0;
  }
}

function checkDimes(value) {
  let tempValue = 0;
  if (value % 0.1 >= 0) {
    tempValue = value - (value % 0.1);
    return tempValue;
  } else {
    return 0;
  }
}

function checkNickels(value) {
  let tempValue = 0;
  if (value % 0.05 >= 0) {
    tempValue = value - (value % 0.05);
    return tempValue;
  } else {
    return 0;
  }
}

function checkPennies(value) {
  let tempValue = 0;
  if (value % 0.01 >= 0) {
    tempValue = value - (value % 0.01);
    return tempValue;
  } else {
    return 0;
  }
}

function checkDollars(value) {
  let tempValue = 0;
  if (value % 1 >= 0) {
    tempValue = value - (value % 1);
    return tempValue;
  } else {
    return 0;
  }
}

function checkFives(value) {
  let tempValue = 0;
  if (value % 5 >= 0) {
    tempValue = value - (value % 5);
    return tempValue;
  } else {
    return 0;
  }
}

function checkTens(value) {
  let tempValue = 0;
  if (value % 10 >= 0) {
    tempValue = value - (value % 10);
    return tempValue;
  } else {
    return 0;
  }
}

function checkTwenties(value) {
  let tempValue = 0;
  if (value % 20 >= 0) {
    tempValue = value - (value % 20);
    return tempValue;
  } else {
    return 0;
  }
}

function checkHundreds(value) {
  let tempValue = 0;
  if (value % 100 >= 0) {
    tempValue = value - (value % 100);
    return tempValue;
  } else {
    return 0;
  }
}

function checkChange(change) {
  let changeCheck = [];
  if (change > 0) {
    while (change > 0) {
      if (checkHundreds(change) > 0) {
        changeCheck.unshift(["ONE HUNDRED", checkHundreds(change)]);
        change = change % 100;
      } else if (checkTwenties(change) > 0) {
        changeCheck.unshift(["TWENTY", checkTwenties(change)]);
        change = change % 20;
      } else if (checkTens(change) > 0) {
        changeCheck.unshift(["TEN", checkTens(change)]);
        change = change % 10;
      } else if (checkFives(change) > 0) {
        changeCheck.unshift(["FIVE", checkFives(change)]);
        change = change % 5;
      } else if (checkDollars(change) > 0) {
        changeCheck.unshift(["ONE", checkDollars(change)]);
        change = change % 1;
      } else if (checkQuarters(change) > 0) {
        changeCheck.unshift(["QUARTER", checkQuarters(change)]);
        change = change % 0.25;
      } else if (checkDimes(change) > 0) {
        changeCheck.unshift(["DIME", checkDimes(change)]);
        change = change % 0.1;
      } else if (checkNickels(change) > 0) {
        changeCheck.unshift(["NICKEL", checkNickels(change)]);
        change = change % 0.05;
      } else if (checkPennies(change) > 0) {
        changeCheck.unshift(["PENNY", checkPennies(change)]);
        change = change % 0.01;
      } else {
        break;
      }
    }
    console.log(changeCheck);
    return changeCheck;
  } else {
    return false;
  }
}

function checkCashRegister(price, cash, cid) {
  let change = 0;
  let cidChecker = [];
  if (cash - price > 0) {
    change = cash - price;
    let changeAmounts = checkChange(change);
    for (let i = 0; i < changeAmounts.length; i++) {
      if (changeAmounts[i][0] == cid[i][0]) {
        if (cid[i][1] > changeAmounts[i][1]) {
          cidChecker.push(false);
          console.log(cidChecker);
          cid[i][1] -= changeAmounts[i][1];
        } else if (cid[i][1] == changeAmounts[i][1]) {
          cid[i][1] -= changeAmounts[i][1];
          cidChecker.push(true);
          console.log(cidChecker);
        } else if (cid[i][1] < changeAmounts[i][1]) {
          cidChecker.push(false);
          console.log(cidChecker);
          console.log("insuff funds");
          return { status: "INSUFFICIENT_FUNDS", change: [] };
        }
      }
    }
    if ([...cidChecker] === true) {
      console.log("closed");
      return { status: "CLOSED", change: cid };
    } else {
      console.log("open");
      return { status: "OPEN", change: changeAmounts };
    }
  } else {
    console.log("insuff funds");
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
}

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
checkCashRegister(19.5, 20, [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);
checkCashRegister(19.5, 20, [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 1],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);
checkCashRegister(19.5, 20, [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);
