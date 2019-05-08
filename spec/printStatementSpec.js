/* eslint-disable no-undef */
/* eslint-disable no-console */
const Transaction = require('../src/transaction');
const Printer = require('../src/printer')
const Account = require('../src/account');

describe('#feature test - print a bank statement', function(){
  let transaction;
  let printer;
  let account;

  beforeEach(function(){
    transaction = new Transaction();
    printer = new Printer();
    account = new Account('James', printer, transaction);
    spyOn(console, "log");
  });

  it('responds with header and client name', function(){
    account.printStatement();
    expect(console.log).toHaveBeenCalledWith(
      "date || credit || debit || balance"
    );
  });

  it('prints a statement for 1 record', function(){
    account.deposit(100, "07/05/2019");
    account.printStatement();
    expect(console.log).toHaveBeenCalledWith(
      "date || credit || debit || balance"
    );
    expect(console.log).toHaveBeenCalledWith(
      "07/05/2019 || 100.00 ||  || 100.00"
    );
  });

  it('prints multiple records', function(){
    account.deposit(100, "07/05/2019");
    account.withdraw(50, "07/05/2019");
    account.printStatement();
    expect(console.log).toHaveBeenCalledWith(
      "date || credit || debit || balance"
    );
    expect(console.log).toHaveBeenCalledWith(
      "07/05/2019 || 100.00 ||  || 100.00"
    );
    expect(console.log).toHaveBeenCalledWith(
      "07/05/2019 ||  || 50.00 || 50.00"
    );
  })

});