/* eslint-disable no-undef */
const Transaction = require('../src/transaction');
const Printer = require('../src/printer');
const Account = require('../src/account');


describe('withdrawing from account', function(){
  let transaction;
  let printer;
  let account;
  beforeEach(function(){
    transaction = new Transaction();
    printer = new Printer();
    account = new Account('James', printer, transaction);
  });

  it('withdraw function defined', function(){
    expect(account.withdraw).toBeDefined();
  });

  it('withdraw some money from the account', function(){
    account.deposit(1000, '07-05-2019');
    account.withdraw(100);
    expect(account.balance).toBe(900.00);
  });

  it('throws error when not enough money', function(){
    account.deposit(5, '07-05-2019');
    expect(() => {
      account.withdraw(10, '07-05-2019');
    }).toThrow();
  });

  it('withdraw some money and record object in statement', function(){
    account.deposit(200, "07-05-2019")
    account.withdraw(100, '07-05-2019')
    expect(account.statement[0]).toEqual({debit: '100.00', date: '07-05-2019', balance: '100.00' })
  });

});