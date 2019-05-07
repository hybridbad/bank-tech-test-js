const Account = require('../src/account');

describe('#feature test - deposit money into account',function () {
  let account;
  beforeEach(function(){
    account = new Account('James');
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

  it('exit code block if amount less than 0', function(){
    account.deposit(-1)
    expect(account.balance).toBe(0)
  });

  it('depositing some money is recorded in statement', function(){
    account.deposit(100, '07-05-2019')
    expect(account.statement[0]).toEqual({credit: 100, date: '07-05-2019', balance: 100 });
  });

});
