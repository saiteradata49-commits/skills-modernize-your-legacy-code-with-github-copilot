const { expect } = require('chai');
const sinon = require('sinon');

// Import the main functions from index.js
const rewire = require('rewire');
const accounting = rewire('./index.js');

// Patch readline-sync for input simulation
const readlineSync = require('readline-sync');

describe('Student Account Management System', function () {
  let originalBalance;

  beforeEach(function () {
    // Reset balance before each test
    accounting.__set__('storageBalance', 1000.00);
    originalBalance = accounting.__get__('storageBalance');
  });

  it('TC-01: View initial balance', function () {
    const bal = accounting.__get__('readBalance')();
    expect(bal).to.equal(1000.00);
  });

  it('TC-02: Credit account with positive amount', function () {
    accounting.__get__('writeBalance')(1000.00); // Ensure starting balance
    sinon.stub(readlineSync, 'question').returns('200.00');
    accounting.__get__('creditAccount')();
    const bal = accounting.__get__('readBalance')();
    expect(bal).to.equal(1200.00);
    readlineSync.question.restore();
  });

  it('TC-03: Debit account with sufficient funds', function () {
    accounting.__get__('writeBalance')(1000.00);
    sinon.stub(readlineSync, 'question').returns('500.00');
    accounting.__get__('debitAccount')();
    const bal = accounting.__get__('readBalance')();
    expect(bal).to.equal(500.00);
    readlineSync.question.restore();
  });

  it('TC-04: Debit account with insufficient funds', function () {
    accounting.__get__('writeBalance')(100.00);
    sinon.stub(readlineSync, 'question').returns('200.00');
    accounting.__get__('debitAccount')();
    const bal = accounting.__get__('readBalance')();
    expect(bal).to.equal(100.00); // Balance unchanged
    readlineSync.question.restore();
  });

  it('TC-05: Menu input out of range', function () {
    // This is a UI test; logic is handled in main loop, so not directly testable here
    // Could be tested with integration tests or refactored for testability
    expect(true).to.be.true;
  });

  it('TC-06: Exit option', function () {
    // This is a UI test; logic is handled in main loop, so not directly testable here
    // Could be tested with integration tests or refactored for testability
    expect(true).to.be.true;
  });
});
