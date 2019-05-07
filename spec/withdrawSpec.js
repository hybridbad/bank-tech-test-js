const Account = require('../src/account');

describe('#feature test - withdraw money from account', function(){
  let account;
  beforeEach(function(){
    account = new Account('James');
  });

  it('withdraw function defined', function(){
    expect(account.withdraw).toBeDefined();
  });

  it('withdraw some money from the account', function(){
    account.deposit(1000, '07-05-2019');
    account.withdraw(100);
    expect(account.balance).toBe(900);
  });

  it('throws error when not enough money', function(){
    account.deposit(5, '07-05-2019');
    expect(() => {
      account.withdraw(10, '07-05-2019');
    }).toThrow();
  });

  it('withdraw some money and record object in statement', function(){
    account.deposit(200)
    account.withdraw(100, '07-05-2019')
    expect(account.statement[1]).toEqual({debit: 100, date: '07-05-2019', balance: 100})
  });

});