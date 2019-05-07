
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

  it('deposit function defined', function(){
    expect(account.deposit).toBeDefined();
  })

  it('deposit some money into account', function(){
    account.deposit(100);
    expect(account.balance).toBe(100);
  })

  it('exit code block if amount less than 0', function(){
    account.deposit(-1)
    expect(account.balance).toBe(0)
  })

  it('depositing some money is recorded in statement', function(){
    account.deposit(100, '07-05-2019')
    expect(account.statement[0]).toEqual({credit: 100, date: '07-05-2019'});
  })

})

describe('#feature test - withdraw money from account', function(){
  let account;
  beforeEach(function(){
    account = new Account('James');
  })

  it('withdraw function defined', function(){
    expect(account.withdraw).toBeDefined();
  })

  it('withdraw some money from the account', function(){
    account.deposit(1000, '07-05-2019');
    account.withdraw(100);
    expect(account.balance).toBe(900);
  })

  it('throws error when not enough money', function(){
    account.deposit(5, '07-05-2019');
    expect(() => {
      account.withdraw(10, '07-05-2019');
    }).toThrow();
  })

  it('withdraw some money and record object in statement', function(){
    account.deposit(200)
    account.withdraw(100, '07-05-2019')
    expect(account.statement[1]).toEqual({debit: 100, date: '07-05-2019'})
  })

})

// describe('#feature test - print a bank statement', function(){

//   let account;
//   beforeEach(function(){
//     spyOn(window.console, 'log');
//     account = new Account('James');
//     account.deposit(1000, '07-05-2019');
//     account.withdraw(100, '07-05-2019');
//   })

//   it('print statement function is defined', function(){
//     expect(account.printStatement).toBeDefined();
//   })

//   it('statement contains deposit and withdraw objects', function(){
    
//   })

//   it('prints a bank statement header', function(){
//     account.printStatement();
//     expect(window.console.log).toHaveBeenCalled();
//   })


// })