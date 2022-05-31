function checkQuarters(value) {
  let tempValue = 0;
  if ((value % .25) > 0) {
    tempValue = value - (value % .25);
    return (tempValue / .25);
  }
  else {
    return false;
  }
}

function checkDimes(value) {
  let tempValue = 0;
  if ((value % .10) > 0) {
    tempValue = value - (value % .10);
    return (tempValue / .10);
  }
  else {
    return false;
  }
}

function checkNickels(value) {
  let tempValue = 0;
  if ((value % .05) > 0) {
    tempValue = value - (value % .05);
    return (tempValue / .05);
  }
  else {
    return false;
  }
}

function checkPennies(value) {
  let tempValue = 0;
  if ((value % .01) > 0) {
    tempValue = value - (value % .01);
    return (tempValue / .01);
  }
  else {
    return false;
  }
}

function checkDollars(value) {
  let tempValue = 0;
  if ((value % 1) > 0) {
    tempValue = value - (value % 1);
    return (tempValue / 1);
  }
  else {
    return false;
  }
}

function checkFives(value) {
  let tempValue = 0;
  if ((value % 5) > 0) {
    tempValue = value - (value % 5);
    return (tempValue / 5);
  }
  else {
    return false;
  }
}

function checkTens(value) {
  let tempValue = 0;
  if ((value % 10) > 0) {
    tempValue = value - (value % 10);
    return (tempValue / 10);
  }
  else {
    return false;
  }
}

function checkTwenties(value) {
  let tempValue = 0;
  if ((value % 20) > 0) {
    tempValue = value - (value % 20);
    return (tempValue / 20);
  }
  else {
    return false;
  }
}

function checkHundreds(value) {
  let tempValue = 0;
  if ((value % 100) > 0) {
    tempValue = value - (value % 100);
    return (tempValue / 100);
  }
  else {
    return false;
  }
}

function checkCashRegister(price, cash, cid) {
  let change = 0;
  let changeCheck = [];
  if (cash >= price) {
    change = cash - price;
  }
  while (change > 0) {
    if (checkHundreds(change) > 0) {
      changeCheck.push(["ONE HUNDRED", checkHundreds(change)]);
      change = change % 100;
    }
    else if (checkTwenties(change) > 0) {
      changeCheck.push(["TWENTY", checkTwenties(change)]);
      change = change % 20;
    }
    else if (checkTens(change) > 0) {
      changeCheck.push(["TEN", checkTens(change)]);
      change = change % 10;
    }
    else if (checkFives(change) > 0) {
      changeCheck.push(["FIVE", checkFives(change)]);
      change = change % 5;
    }
    else if (checkDollars(change) > 0) {
      changeCheck.push(["ONE", checkDollars(change)]);
      change = change % 1;
    }
    else if (checkQuarters(change) > 0) {
      changeCheck.push(["QUARTER", checkQuarters(change)]);
      change = change % .25;
    }
    else if (checkDimes(change) > 0) {
      changeCheck.push(["DIME", checkDimes(change)]);
      change = change % .10;
    }
    else if (checkNickels(change) > 0) {
      changeCheck.push(["NICKEL", checkNickels(change)]);
      change = change % .05;
    }
    else if (checkPennies(change) > 0) {
      changeCheck.push(["PENNY", checkPennies(change)]);
    }
  }
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
