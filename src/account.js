/* eslint-disable no-console */
class Account {
  constructor(name, printer) {
    this.name = name;
    this.balance = 0;
    this.statement = [];
    this.printer = printer;
  }

  deposit(amount, date){
    if (amount < 0) return
    this.updateBalance(amount)
    const depositObj = {
      credit: amount, 
      date: date,
      balance: this.balance
    };
    this.statement.push(depositObj);
  }

  withdraw(amount, date){
    if (amount > this.balance) throw "Not enough funds";
    this.updateBalance(-amount)
    const withdrawObj = {
      debit: amount, 
      date: date,
      balance: this.balance
    };
    this.statement.push(withdrawObj);
  }

  printStatement(){
    return this.printer.printStatement(this.statement);
  }

  updateBalance(amount){
    this.balance += amount;
  }
}

module.exports = Account;