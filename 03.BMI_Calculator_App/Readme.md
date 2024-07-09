# BMI Calculator App 🚻
 
## HTML Structure 🧱

1. **Container Setup**

   - `<div class="container">`: Wrapper for the entire BMI Calculator section.

2. **Form Container**

   - `<div class="form-container">`: Container for the form elements.

3. **Heading**

   - `<h1 class="heading">BMI Calculator</h1>`: Adds a heading with the text "BMI Calculator."

4. **Height Input Field**

   - `<input type="text" name="cm" id="cm" placeholder="Enter your Height" />`: Text input for height with a placeholder.

5. **Line Break**

   - `<br />`: Adds a line break for spacing.

6. **Weight Input Field**

   - `<input type="text" name="weight" id="kg" placeholder="Enter your Weight" />`: Text input for weight with a placeholder.

7. **Line Break**

   - `<br />`: Adds a line break for spacing.

8. **Submit Button**

   - `<input type="submit" value="Calculate" id="submit" onclick="getBmi()" />`: Submit button with an onclick event to calculate BMI.

9. **Result Display**

   - `<div id="result">`: Placeholder for displaying the calculated BMI.
     - `<!-- Your BMI is 24 😊 -->`: Comment indicating where the result will be shown.

10. **Close Container**

    - `</div>`: Closes the form container.
    - `</div>`: Closes the main container.

## CSS Styling 🌈

- style the `container div`.
- style the `Form-container div`.
- style the `heading`.
- style the `Form-container input`
- style the result

## Javascript Interactivity 🚀

1. User Input:

   - The user enters values for height (cm) and weight (kg) into input fields.

2. Event Listener:

   - The function `getBmi` is triggered when the user clicks the submit button (`submit`).

3. Inside `getBmi` function:

   - Get the value of height in centimeters (cm) from the input field with id 'cm'.

     - cm = +document.getElementById('cm').value; // Convert input value to number.

   - Get the value of weight in kilograms (kg) from the input field with id 'kg'.

     - kg = +document.getElementById('kg').value; // Convert input value to number.

   - Initialize variables:

     - bmi; // This will hold the calculated BMI value.
     - newCm = +(cm / 100); // Convert cm to meters (divide by 100).

   - Calculate BMI using the formula: bmi = kg / (newCm \* newCm);

     - newCm \* newCm calculates the square of height in meters.
     - bmi = kg / (newCm \* newCm);

   - Round BMI to one decimal place:

     - bmi = bmi.toFixed(1); // toFixed() method converts number to string with specified decimal places.

   - Update the HTML content of an element with id 'result':
     - document.getElementById('result').innerHTML = 'Your BMI is ' + bmi + "😊";

4. Output:

   - The BMI calculation result is displayed in the HTML element with id 'result' in the format: "Your BMI is [value] 😊".
