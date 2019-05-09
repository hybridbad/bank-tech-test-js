/* eslint-disable no-console */
/* eslint-disable no-undef */
const Transaction = require('../src/transaction');
const Printer = require('../src/printer');
const Account = require('../src/account');

describe('#feature test - deposit money into account',function () {
  let transaction;
  let printer;
  let account;

  beforeEach(function(){
    transaction = new Transaction();
    printer = new Printer();
    account = new Account('James', printer, transaction);
    spyOn(console, "log");
  });

  it('create instance of an account with a name', function(){
    expect(account instanceof Account).toBeTruthy();
    expect(account.name).toBe('James')
  });

  it('instance has default balance of 0', function(){
    expect(account.balance).toBe(0)
  });

  it('deposit some money into account', function(){
    account.deposit(100);
    expect(account.balance).toBe(100);
  });

  it('withdraw some money from the account', function(){
    account.deposit(1000, "07/05/2019");
    account.withdraw(100, "07/05/2019");
    expect(account.balance).toBe(900.00);
  });

  it('prints a statement', function(){
    account.deposit(1000, "07/05/2019");
    account.withdraw(100, "07/05/2019");
    account.printStatement();
    expect(console.log).toHaveBeenCalledWith(
      "date || credit || debit || balance"
    );
    expect(console.log).toHaveBeenCalledWith(
      "07/05/2019 || 1000.00 ||  || 1000.00"
    );
    expect(console.log).toHaveBeenCalledWith(
      "07/05/2019 ||  || 100.00 || 900.00"
    );
  })
})