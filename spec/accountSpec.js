
describe('#feature test - deposit money into account',function () {
  let account;
  beforeEach(function(){
    account = new Account('James');
  })

  it('create instance of an account with a name', function(){
    expect(account instanceof Account).toBeTruthy();
    expect(account.name).toBe('James')
  })

  it('instance has default balance of 0', function(){
    expect(account.balance).toBe(0)
  })

  it('deposit some money into account', function(){
    account.deposit(100);
    expect(account.balance).toBe(100);
  })

  it('depositing some money returns amount and timestamp in array', function(){
    expect(account.deposit(100, '07-05-2019')).toEqual([100, '07-05-2019']);
    expect(account.balance).toBe(100);
  })


})

describe('#feature test - withdraw money from account', function(){
  let account;
  beforeEach(function(){
    account = new Account('James');
    account.deposit(1000, '07-05-2019');
  })

  it('withdraw some money from the account', function(){
    account.withdraw(100);
    expect(account.balance).toBe(900);
  })

  it('withdraw some money returns amount and timestamp in array', function(){
    expect(account.withdraw(100, '07-05-2019')).toEqual([-100, '07-05-2019']);
  })

})

// describe('#feature test - print a bank statement', function(){
//   let account;
//   beforeEach(function(){
//     account = new Account('James');
//     account.deposit(1000, '07-05-2019');
//     account.withdraw(100, '07-05-2019');
//   })

//   it('prints a bank statement', function(){
//     expect(account).to
//   })

// })