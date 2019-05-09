class Transaction {

  deposit(amount, date, statement, balance){
    if (amount < 0) throw "You can't deposit this"
    const depositObj = {
      credit: amount.toFixed(2), 
      date: date,
      balance: balance.toFixed(2)
    };
    statement.unshift(depositObj);
  }

  withdraw(amount, date, statement, balance){
    if (amount > balance) throw "Not enough funds";
    const withdrawObj = { 
      debit: amount.toFixed(2), 
      date: date,
      balance: balance.toFixed(2)
    };
    statement.unshift(withdrawObj);
  }

}

module.exports = Transaction;