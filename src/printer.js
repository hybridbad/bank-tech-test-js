/* eslint-disable no-console */
class Printer {
  printStatement(statement){
    console.log("date || credit || debit || balance");
    statement.forEach(function(record){
        if (record.credit === undefined) { record.credit = "" }
        if (record.debit === undefined) { record.debit = "" }
      console.log(
        record.date + " || " + record.credit + " || " + record.debit + " || " + record.balance
      );
    });
  }
}

module.exports = Printer;