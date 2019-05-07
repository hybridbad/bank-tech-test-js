class Account {
  constructor(name) {
    this.name = name;
    this.balance = 0;
    this.statement = [];
  }

  deposit(amount, date){
    if (amount < 0) return
    this.balance += amount;
    const depositObj = {
      credit: amount, 
      date: date,
      balance: this.balance
    };
    this.statement.push(depositObj);
  }

  withdraw(amount, date){
    if (amount > this.balance) throw "Not enough funds";
    this.balance -= amount;
    const withdrawObj = {
      debit: amount, 
      date: date,
      balance: this.balance
    };
    this.statement.push(withdrawObj);
  }

  printStatement(){
    console.log("date || credit || debit || balance");
    const statement = this.statement;
    statement.forEach(function(record){
      if (record.credit === undefined) { record.credit = "" }
      if (record.debit === undefined) { record.debit = "" }
      console.log(
        record.date + " || " + record.credit + " || " + record.debit + " || " + record.balance
      );
    });
  }
}

module.exports = Account;