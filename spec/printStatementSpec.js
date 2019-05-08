/* eslint-disable no-undef */
/* eslint-disable no-console */

const Account = require('../src/account');

describe('#feature test - print a bank statement', function(){
  let account;

  beforeEach(function(){
    account = new Account('James');
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
      "07/05/2019 || 100 ||  || 100"
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
      "07/05/2019 || 100 ||  || 100"
    );
    expect(console.log).toHaveBeenCalledWith(
      "07/05/2019 ||  || 50 || 50"
    );
  })

});