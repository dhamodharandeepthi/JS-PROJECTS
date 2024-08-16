# Word Counter App 🔠

App Link - https://word-counter-app-using-js.netlify.app/

https://github.com/user-attachments/assets/0cc4a03a-5848-46ab-a051-abdf6ee486b8

## HTML Structure 🧱

- `<div class="container">`: Container for the entire interface.
  - `<h1>Type A Word in the Box</h1>`: Heading prompting the user to type.
  - `<textarea id="textarea" cols="50" rows="4"></textarea>`: Text area for inputting text.
  - `<div>`: Container for buttons.
    - `<button class="btn" id="countBtn">Get Words Count</button>`: Button to count words.
    - `<button class="btn" id="resetBtn">Reset</button>`: Button to reset the text area.
  - `<h2 id="output"></h2>`: Placeholder for displaying word count or messages.

## CSS Styling 🌈

- style the `container div`
- style the `h1 tag`
- style the `textarea`
- style the `button`
- style the `h2 tag`

## Javascript Interactivity 🚀

1. Initialization:

   - Define a function wordCounts(words) that updates an HTML element with id "output" to display the length of input words.
   - Define a function resetWords() to clear the content of "output" element and reset the value of a textarea with id "textarea".
   - Set an onclick event listener on a button with id "countBtn" to call wordCounts() when clicked.
   - Set an onclick event listener on a button with id "resetBtn" to call resetWords() when clicked.

2. User Interaction:

   a. User enters text into a textarea with id "textarea".
   b. Clicks the "Count Words" button (countBtn).

3. Event Handling:

   - onclick of countBtn:

     - Get the value of textarea (trimmed of leading and trailing whitespace).
     - Call wordCounts() with the length of the trimmed textarea value as the argument.
     - Update the HTML content of an element with id "output" to display "Words Length is : <length>".

   - onclick of resetBtn:
     - Call resetWords().
     - Clears the HTML content of the element with id "output".
     - Resets the value of the textarea with id "textarea" to an empty string.

4. Example Execution:

   Input:

   - User enters "Hello World" into textarea.
   - Clicks "Count Words" button.

   Execution:

   - Trimmed textarea value length = 11.
   - Update "output" element to display "Words Length is : 11 😊".

   Reset:

   - Clicks "Reset" button.
   - Clears "output" element.
   - Resets textarea value to an empty string.
