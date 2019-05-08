/* eslint-disable no-console */
class Account {
  constructor(name, printer, transaction) {
    this.name = name;
    this.balance = 0;
    this.statement = [];
    this.printer = printer;
    this.transaction = transaction;
  }

  deposit(amount, date, statement = this.statement){
    this.balance += amount;
    return this.transaction.deposit(amount, date, statement, this.balance);
  }

  withdraw(amount, date, statement = this.statement){
    this.balance -=amount;
    return this.transaction.withdraw(amount, date, statement, this.balance);
  }

  printStatement(){
    return this.printer.printStatement(this.statement);
  }
}

module.exports = Account;