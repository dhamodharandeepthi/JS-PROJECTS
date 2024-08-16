# Password Generator App 🔒

App Link - https://password-generator-app-using-js.netlify.app/

https://github.com/user-attachments/assets/8f256922-8733-47d6-8b06-3185fcba6ebf

## HTML Structure 🧱

1. **Container Setup**

   - `<div class="container">`: Wrapper for the entire password generator section.

2. **Heading**

   - `<h1>Password Generator</h1>`: Heading for the password generator.

3. **Generator Section**

   - `<div class="generator">`: Wrapper for the password generator components.

4. **Password Display and Copy Button**

   - `<div class="password">`: Wrapper for the password display and copy button.
     - `<input type="text" value="test" />`: Text input to display the generated password.
     - `<button>copy</button>`: Button to copy the password.

5. **Range Slider**

   - `<div class="range">`: Wrapper for the range input.
     - `<input type="range" min="4" max="24" />`: Range slider to select password length.
     - `<span>8</span>`: Span to display the selected length.

6. **Options Section**

   - `<div class="options">`: Wrapper for the password options.
     - **Lowercase Letters Option**
       - `<div class="option">`: Wrapper for the lowercase letters option.
         - `<label>`: Label for the checkbox.
           - `<input type="checkbox" id="lowercaseLetters" />`: Checkbox for lowercase letters.
           - `<span>a-z</span>`: Span to display the option text.
     - **Uppercase Letters Option**
       - `<div class="option">`: Wrapper for the uppercase letters option.
         - `<label>`: Label for the checkbox.
           - `<input type="checkbox" id="uppercaseLetters" />`: Checkbox for uppercase letters.
           - `<span>A-Z</span>`: Span to display the option text.
     - **Digits Option**
       - `<div class="option">`: Wrapper for the digits option.
         - `<label>`: Label for the checkbox.
           - `<input type="checkbox" id="digits" />`: Checkbox for digits.
           - `<span>0-9</span>`: Span to display the option text.
     - **Symbols Option**
       - `<div class="option">`: Wrapper for the symbols option.
         - `<label>`: Label for the checkbox.
           - `<input type="checkbox" id="symbols" />`: Checkbox for symbols.
           - `<span>!@#$5^&*</span>`: Span to display the option text.

7. **Generate Button**

   - `<button class="generate" onclick="generate()">Generate</button>`: Button to generate the password.

## CSS Styling 🌈

- style the `container div`
- style the `h1,generate div,password div,range div,options div,generate button`.

## Javascript Interactivity 🚀

1. Initialization:

   - The function `generate()` is defined, which handles generating a password based on selected options and settings.

2. Event Listeners:

   - The following event listeners are set up:
     - For checkboxes (`input[type="checkbox"]`) and the generate button (`button.generate`):
       - When clicked, they call the `generate()` function.
     - For the range input (`input[type="range"]`):
       - When its value changes (`input` event), update the displayed length and call `generate()`.
     - For the copy button in the password display (`div.password button`):
       - When clicked, copy the password to the clipboard and show "copied!" temporarily.

3. Function `generate()` Execution:

   - Starts with an empty `dictionary` string.
   - Checks each checkbox (`lowercaseLetters`, `uppercaseLetters`, `digits`, `symbols`) to decide which character sets to include in `dictionary`.
   - Concatenates corresponding character sets based on checked checkboxes.
   - Retrieves the desired password length from the range input (`input[type='range']`).
   - If the length is less than 1 or no character sets are selected (`dictionary.length === 0`), returns early.

4. Generating Password:

   - Initializes an empty `password` string.
   - Iterates `length` times (as determined by the range input):
     - Generates a random index `pos` within the bounds of `dictionary` length using `Math.random()`.
     - Appends the character at `dictionary[pos]` to `password`.

5. Displaying Password:

   - Sets the value of `input[type="text"]` to `password`, displaying the generated password.

6. Copy Button Interaction:

   - When the copy button (`div.password button`) is clicked:
     - Copies the password (`pass`) to the clipboard using `navigator.clipboard.writeText()`.
     - Updates the button text to "copied!" temporarily using a timeout (`setTimeout()`).
     - Resets the button text to "copy" after 1 second.

7. Initial Execution:

   - Calls `generate()` initially to set up the password generation based on initial settings.
