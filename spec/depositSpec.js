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
  });

  it('create instance of an account with a name', function(){
    expect(account instanceof Account).toBeTruthy();
    expect(account.name).toBe('James')
  });

  it('instance has default balance of 0', function(){
    expect(account.balance).toBe(0)
  });

  it('deposit function defined', function(){
    expect(account.deposit).toBeDefined();
  });

  it('deposit some money into account', function(){
    account.deposit(100);
    expect(account.balance).toBe(100);
  });


  it('throws error when negative amount', function(){
    expect(() => {
      account.deposit(-10, '07-05-2019');
    }).toThrow();
  });

  it('depositing some money is recorded in statement', function(){
    account.deposit(100, '07-05-2019')
    expect(account.statement[0]).toEqual({credit: '100.00', date: '07-05-2019', balance: '100.00' });
  });

});
