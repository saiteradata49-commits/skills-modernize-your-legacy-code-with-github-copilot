const readline = require('readline-sync');

// Data layer simulating the COBOL DataProgram
let storageBalance = 1000.00;

function readBalance() {
  return storageBalance;
}

function writeBalance(newBalance) {
  storageBalance = newBalance;
}

// Business logic functions corresponding to Operations program
function viewBalance() {
  const bal = readBalance();
  console.log(`Current balance: ${bal.toFixed(2)}`);
}

function creditAccount() {
  const input = readline.question('Enter credit amount: ');
  const amount = parseFloat(input);
  if (isNaN(amount) || amount <= 0) {
    console.log('Invalid amount. Transaction cancelled.');
    return;
  }
  let bal = readBalance();
  bal += amount;
  writeBalance(bal);
  console.log(`Amount credited. New balance: ${bal.toFixed(2)}`);
}

function debitAccount() {
  const input = readline.question('Enter debit amount: ');
  const amount = parseFloat(input);
  if (isNaN(amount) || amount <= 0) {
    console.log('Invalid amount. Transaction cancelled.');
    return;
  }
  let bal = readBalance();
  if (bal >= amount) {
    bal -= amount;
    writeBalance(bal);
    console.log(`Amount debited. New balance: ${bal.toFixed(2)}`);
  } else {
    console.log('Insufficient funds for this debit.');
  }
}

// Main program flow replicating MainProgram
function main() {
  let continueFlag = true;

  while (continueFlag) {
    console.log('--------------------------------');
    console.log('Account Management System');
    console.log('1. View Balance');
    console.log('2. Credit Account');
    console.log('3. Debit Account');
    console.log('4. Exit');
    console.log('--------------------------------');

    const choice = readline.question('Enter your choice (1-4): ');
    switch (choice.trim()) {
      case '1':
        viewBalance();
        break;
      case '2':
        creditAccount();
        break;
      case '3':
        debitAccount();
        break;
      case '4':
        continueFlag = false;
        break;
      default:
        console.log('Invalid choice, please select 1-4.');
        break;
    }
  }

  console.log('Exiting the program. Goodbye!');
}

// entry point if run directly
if (require.main === module) {
  main();
}
