# Test Plan for COBOL Student Account Application

This test plan outlines test cases covering all of the current business logic in the COBOL application. Each case uses a table with the specified headings so stakeholders can validate expected behavior before implementing Node.js equivalents.

| Test Case ID | Test Case Description | Pre-conditions | Test Steps | Expected Result | Actual Result | Status (Pass/Fail) | Comments |
|--------------|-----------------------|----------------|------------|-----------------|---------------|--------------------|----------|
| TC-01 | View initial balance | Program started, balance is default 1000.00 | 1. Launch program
2. Enter choice `1` | Display "Current balance: 1000.00" |  |  |  |
| TC-02 | Credit account with positive amount | Balance is known (start at 1000.00) | 1. Launch program
2. Enter `2`
3. Enter amount `200.00` | Balance updates to 1200.00 and message shown |  |  |  |
| TC-03 | Debit account with sufficient funds | Balance at least 500.00 | 1. Launch program
2. Enter `3`
3. Enter amount `500.00` | Balance updates subtracting amount and message shown |  |  |  |
| TC-04 | Debit account with insufficient funds | Balance less than requested amount (e.g. 100.00) | 1. Launch program
2. Enter `3`
3. Enter amount greater than balance (e.g. 200.00) | Display "Insufficient funds for this debit."; balance unchanged |  |  |  |
| TC-05 | Menu input out of range | Program running | 1. Enter choice `5` or `0` | Display "Invalid choice, please select 1-4." and redisplay menu |  |  |  |
| TC-06 | Exit option | Program running | 1. Enter choice `4` | Program displays exit message and terminates |  |  |  |

> **Note:** Actual Result and Status columns are left blank for stakeholders to fill when running tests.

This plan provides a comprehensive baseline for later automation, ensuring that units corresponding to balance read/write operations, credit/debit validation, and user input handling are covered.