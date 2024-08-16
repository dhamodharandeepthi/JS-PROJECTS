# EMI Calculator app 💰

App Link - https://emi-calculator-using-js.netlify.app/

https://github.com/user-attachments/assets/ebb85246-b4ed-4e77-8268-c98efdb10a38

## HTML Structure 🧱

1. **Container Setup**:

   - `<div class="container">`: Main container for the EMI calculator.

2. **Form Container**:

   - `<div class="form-container">`: Container for the EMI calculator form.

3. **Heading**:

   - `<h1>EMI Calculator</h1>`: Main heading for the EMI calculator.

4. **Horizontal Line**:

   - `<hr />`: Horizontal line for visual separation.

5. **Form Groups**:

   - Each `<div class="form-group">` contains:
     - `<label>`: Label for each input field.
     - `<input type="number" id="...">`: Input field for loan amount, interest rate, and tenure.

6. **Calculate and Reset Buttons**:

   - `<button type="button" onclick="getEmi()">Calculate</button>`: Button to calculate EMI.
   - `<button type="reset" onclick="resetEmi()">Reset</button>`: Button to reset form inputs.

7. **EMI Result**:
   - `<h2 id="emi"></h2>`: Heading for displaying calculated EMI result.

## CSS Styling 🌈

- style the `container div`
- styel the `form-container div`
- style the `h1`
- style the `form-group div`
- style the `label` and `input`
- style the `button` and `h2`

## Javascript Interactivity 🚀

1. Get Inputs:

   - Get the principal amount from the HTML input element with id "amount".
   - Get the annual interest rate from the HTML input element with id "rate".
   - Get the tenure in years from the HTML input element with id "tenure".

2. Convert Annual Interest Rate to Monthly:

   - Calculate monthlyInterestRate = annualInterestRate / (12 \* 100).

3. Convert Tenure in Years to Number of Monthly Payments:

   - Calculate numberOfMonths = tenureInYears \* 12.

4. Calculate EMI (Equated Monthly Installment):

   - emi = (principal _ monthlyInterestRate _ Math.pow(1 + monthlyInterestRate, numberOfMonths)) /
     (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1).

5. Display the Result:

   - Set the innerHTML of the HTML element with id "emi" to display the calculated EMI in the format "EMI IS RS: emiValue/-", rounded to 2 decimal places using toFixed(2).

6. Reset Inputs:

   - Set the value of the HTML input element with id "amount" to an empty string ("").
   - Set the value of the HTML input element with id "rate" to an empty string ("").
   - Set the value of the HTML input element with id "tenure" to an empty string ("").

7. Reset Display:

   - Set the innerHTML of the HTML element with id "emi" to an empty string ("").
