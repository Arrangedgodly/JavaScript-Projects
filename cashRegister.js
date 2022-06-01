function checkQuarters(value) {
  let tempValue = 0;
  if ((value * 100) % 25 >= 0) {
    tempValue = (value * 100 - ((value * 100) % 25)) / 100;
    return tempValue;
  } else {
    return 0;
  }
}

function checkDimes(value) {
  let tempValue = 0;
  if ((value * 100) % 10 >= 0) {
    tempValue = (value * 100 - ((value * 100) % 10)) / 100;
    return tempValue;
  } else {
    return 0;
  }
}

function checkNickels(value) {
  let tempValue = 0;
  if ((value * 100) % 5 >= 0) {
    tempValue = (value * 100 - ((value * 100) % 5)) / 100;
    return tempValue;
  } else {
    return 0;
  }
}

function checkPennies(value) {
  let tempValue = 0;
  if ((value * 100) % 1 >= 0) {
    tempValue = (value * 100 - ((value * 100) % 1)) / 100;
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
        change = change.toFixed(2);
      } else if (checkTwenties(change) > 0) {
        changeCheck.unshift(["TWENTY", checkTwenties(change)]);
        change = change % 20;
        change = change.toFixed(2);
      } else if (checkTens(change) > 0) {
        changeCheck.unshift(["TEN", checkTens(change)]);
        change = change % 10;
        change = change.toFixed(2);
      } else if (checkFives(change) > 0) {
        changeCheck.unshift(["FIVE", checkFives(change)]);
        change = change % 5;
        change = change.toFixed(2);
      } else if (checkDollars(change) > 0) {
        changeCheck.unshift(["ONE", checkDollars(change)]);
        change = change % 1;
        change = change.toFixed(2);
      } else if (checkQuarters(change) > 0) {
        changeCheck.unshift(["QUARTER", checkQuarters(change)]);
        change = ((change * 100) % 25) / 100;
        change = change.toFixed(2);
      } else if (checkDimes(change) > 0) {
        changeCheck.unshift(["DIME", checkDimes(change)]);
        change = ((change * 100) % 10) / 100;
        change = change.toFixed(2);
      } else if (checkNickels(change) > 0) {
        changeCheck.unshift(["NICKEL", checkNickels(change)]);
        change = ((change * 100) % 5) / 100;
        change = change.toFixed(2);
      } else if (checkPennies(change) > 0) {
        changeCheck.unshift(["PENNY", checkPennies(change)]);
        change = ((change * 100) % 1) / 100;
        change = change.toFixed(2);
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

let penny = /PENNY/;
let nickel = /NICKEL/;
let dime = /DIME/;
let quarter = /QUARTER/;
let dollar = /ONE/;
let fiveBill = /FIVE/;
let tenBill = /TEN/;
let twentyBill = /TWENTY/;
let hundredBill = /HUNDRED/;
let changeValues = [
  hundredBill,
  twentyBill,
  tenBill,
  fiveBill,
  dollar,
  quarter,
  dime,
  nickel,
  penny,
];

function checkCid(change, cid) {
  for (let i = 0; i < change.length; i++) {
    if (hundredBill.test(change[change.length - 1 - i][0])) {
      let checkOne = checkHundreds(cid[i][1]);
      let checkTwo = checkHundreds(change[i][1]);
      if (checkTwo > checkOne) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
      } else if (checkTwo == checkOne) {
      }
    }
    if (twentyBill.test(change[change.length - 1 - i][0])) {
      let checkOne = checkTwenties(cid[i][1]);
      let checkTwo = checkTwenties(change[i][1]);
      if (checkTwo > checkOne) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
      }
    }
    if (tenBill.test(change[change.length - 1 - i][0])) {
      let checkOne = checkTens(cid[i][1]);
      let checkTwo = checkTens(change[i][1]);
      if (checkTwo > checkOne) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
      }
    }
    if (fiveBill.test(change[change.length - 1 - i][0])) {
      let checkOne = checkFives(cid[i][1]);
      let checkTwo = checkFives(change[i][1]);
      if (checkTwo > checkOne) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
      }
    }
    if (dollar.test(change[change.length - 1 - i][0])) {
      let checkOne = checkDollars(cid[i][1]);
      let checkTwo = checkDollars(change[i][1]);
      if (checkTwo > checkOne) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
      }
    }
    if (quarter.test(change[change.length - 1 - i][0])) {
      let checkOne = checkQuarters(cid[i][1]);
      let checkTwo = checkQuarters(change[i][1]);
      if (checkTwo > checkOne) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
      }
    }
    if (dime.test(change[change.length - 1 - i][0])) {
      let checkOne = checkDimes(cid[i][1]);
      let checkTwo = checkDimes(change[i][1]);
      if (checkTwo > checkOne) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
      }
    }
    if (nickel.test(change[change.length - 1 - i][0])) {
      let checkOne = checkNickels(cid[i][1]);
      let checkTwo = checkNickels(change[i][1]);
      if (checkTwo > checkOne) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
      }
    }
    if (penny.test(change[change.length - 1 - i][0])) {
      let checkOne = checkPennies(cid[i][1]);
      let checkTwo = checkPennies(change[i][1]);
      if (checkTwo > checkOne) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
      }
    }
  }
}

function checkCashRegister(price, cash, cid) {
  let change = 0;
  if (cash - price > 0) {
    change = cash - price;
    let changeAmounts = checkChange(change);
    checkCid(changeAmounts, cid);
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
