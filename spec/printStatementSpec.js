/* eslint-disable no-undef */
/* eslint-disable no-console */
const Printer = require('../src/printer')

describe('#print a bank statement', function(){
  let printer;

  beforeEach(function(){
    printer = new Printer();
    statement = [ 
      { debit: "100.00", date: "09/05/2019", balance: "100.00" },
      { credit: "1000.00", date: "09/05/2019", balance: "1000.00" }
    ]
    spyOn(console, "log");
  });

  it('responds with header and client name', function(){
    printer.printStatement(statement);
    expect(console.log).toHaveBeenCalledWith(
      "date || credit || debit || balance"
    );
  });

  it('prints a statement', function(){
    printer.printStatement(statement);
    expect(console.log).toHaveBeenCalledWith(
      "date || credit || debit || balance"
    );
    expect(console.log).toHaveBeenCalledWith(
      "09/05/2019 ||  || 100.00 || 100.00"
    );
    expect(console.log).toHaveBeenCalledWith(
      "09/05/2019 || 1000.00 ||  || 1000.00"
    );
  })

});