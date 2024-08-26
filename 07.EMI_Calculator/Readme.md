# EMI Calculator app 💰

This is a simple EMI (Equated Monthly Installment) Calculator built with HTML, CSS, and JavaScript. The calculator allows users to input the loan amount, annual interest rate, and loan tenure in years to calculate the EMI amount.

## App link

https://emi-calculator-using-js.netlify.app/

## Demo

https://github.com/user-attachments/assets/ebb85246-b4ed-4e77-8268-c98efdb10a38

## Features

- **Loan Amount**: Input field for the principal loan amount.
- **Interest Rate**: Input field for the annual interest rate.
- **Tenure**: Input field for the loan tenure in years.
- **Calculate EMI**: Button to calculate the EMI based on the provided inputs.
- **Reset**: Button to reset the input fields and EMI result.

## How to Use

1. **Enter Loan Amount**: Input the principal loan amount in the "Loan Amount" field.
2. **Enter Interest Rate**: Input the annual interest rate (in percentage) in the "Interest Rate" field.
3. **Enter Tenure**: Input the loan tenure in years in the "Tenure in years" field.
4. **Calculate EMI**: Click the "Calculate" button to compute the EMI. The result will be displayed below the button.
5. **Reset**: Click the "Reset" button to clear all input fields and the displayed EMI.

## Files Included

- `index.html`: The main HTML file containing the structure of the EMI Calculator.
- `style.css`: The CSS file for styling the calculator.
- `script.js`: The JavaScript file that handles the EMI calculation logic.

## Formula Used

The EMI is calculated using the formula:

\[
EMI = \frac{P \times r \times (1 + r)^n}{(1 + r)^n - 1}
\]

Where:

- \( P \) is the principal loan amount.
- \( r \) is the monthly interest rate (annual interest rate divided by 12 and converted to a decimal).
- \( n \) is the loan tenure in months.

## Example

For a loan amount of ₹1,00,000 at an annual interest rate of 10% for a tenure of 5 years, the EMI would be calculated as follows:

- **Loan Amount**: ₹1,00,000
- **Interest Rate**: 10% p.a
- **Tenure**: 5 years

Click "Calculate" to get the EMI.
