# Random Quotes Generator App 🎲

App Link - https://random-quotes-using-js.netlify.app/

https://github.com/user-attachments/assets/b2d24ac0-9cfa-46f3-ae34-1cc24ce56452


## HTML Structure 🧱

1. Create a container:

   - `<div class="container">`: Wrapper for the entire content.

2. Heading for Quote of the Day:

   - `<h1 class="heading">Quote of the Day</h1>`: Main title for the quote.

3. Sub-heading for instructions:

   - `<p class="sub-heading">please click on the button to generate quotes</p>`: Provides instructions.

4. Button to generate quote:

   - `<button class="btn" onclick="getQuotes()">Generate Quote</button>`: Initiates quote generation.

5. Container for displaying the quote:

   - `<div class="quote-container">`: Contains the generated quote and author.
     - `<p id="quote">" your generated quote "</p>`: Displays the generated quote.
     - `<p id="auther">- author name</p>`: Displays the author's name.

## CSS Styling 🌈

- style the `Container div`
- style the `heading`,`subheading`,`button`,`quote-container div`
- style the `quote` `auther`

## Javascript Interactivity 🚀

1. Initialization:

   - Assume qoutesArrayData is an array of objects containing quotes and authors.

2. Calling getQuotes():

3. Inside getQuotes():
   - Call randomQuotes(qoutesArrayData.length) to generate a random index.

Function randomQuotes(arrayLength):

4.  randomQuotes(arrayLength):

- Generate a random floating-point number between 0 (inclusive) and 1 (exclusive) using Math.random().
- Multiply this number by arrayLength to get a random number between 0 (inclusive) and arrayLength (exclusive).
- Use Math.floor() to round down to the nearest integer.
- Return this random integer as the index.

5. Back to getQuotes():

   - Assign the returned random index to randomNumber.

6. Update the DOM:
   - Access the HTML element with id "quote" and set its innerHTML to the quote located at qoutesArrayData[randomNumber].quote.
   - Access the HTML element with id "auther" and set its innerHTML to the author located at qoutesArrayData[randomNumber].author.

Final Output:

- The HTML element with id "quote" displays a random quote in the format: "quote text".
- The HTML element with id "auther" displays the corresponding author in the format: "- author name".
