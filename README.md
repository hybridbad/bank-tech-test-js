## Bank Tech Test - Week 10

### Language and Technolgies

- Javascript
- Jasmine
- Istanbul test coverage
- Console interaction with node console

### Run program
```script
cd to folder you want to clone to
git clone git@github.com:hybridbad/bank-tech-test-js.git
cd bank-tech-test-js
npm install
node
.load ./src/transaction.js
.load ./src/printer.js
.load ./src/account.js
const transaction = new Transaction()
const printer = new Printer()
const account = new Account('Your name here', printer, transaction)
```

#### Node console screen

![Node console](https://github.com/hybridbad/bank-tech-test-js/blob/master/img/node_shot.png?raw=true)

To run jasmine testing plus coverage, in root of dir type:
```script
npm run coverage
```


### Requirements

* You should be able to interact with your code via a REPL like IRB or the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

### Modelling - Deciphering the criteria

#### Nouns
- client
- credit
- date
- debit
- balance
- statement

#### Verbs

- Withdraw some money
- Deposit some money into your account
- Print my bank statement


