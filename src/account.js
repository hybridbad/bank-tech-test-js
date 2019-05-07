
class Account {
  constructor(name) {
    this.name = name;
    this.balance = 0;
    this.statement = [];
  }

  deposit(amount, date){
    if (amount < 0) return
    const depositObj = {credit: amount, date: date};
    this.balance += amount;
    this.statement.push(depositObj);
  }

  withdraw(amount, date){
    if (amount > this.balance) throw "Not enough funds";
    const withdrawObj = {debit: amount, date: date};
    this.balance -= amount;
    this.statement.push(withdrawObj);
  }

  printStatement(){
    console.log("date || credit || debit || balance")

  }
}

