const Account = require('../src/account');

describe('#feature test - print a bank statement', function(){
  let account;

  beforeEach(function(){
    account = new Account('James');
    spyOn(console, "log");
  });

  it('responds with header', function(){
    account.printStatement();
    expect(console.log).toHaveBeenCalledWith(
      "date || credit || debit || balance"
    );
  });

  // it('prints a statement', function(){
  //   account.deposit(100, "07/05/2019");
  //   account.printStatement();
  //   expect(console.log).toHaveBeenCalledWith(
  //     "date || credit || debit || balance"
  //   );
  //   expect(console.log).toHaveBeenCalledWith(
  //     "07/05/2019 || || 100.00 || 100.00"
  //   );
  // });

});