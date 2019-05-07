
class Account {
  constructor(name) {
    this.name = name;
    this.balance = 0;
  }

  deposit(amount, date){
    this.balance += amount;
    return [amount, date]
  }

  withdraw(amount, date){
    this.balance -= amount;
    return [-amount, date]
  }

}
