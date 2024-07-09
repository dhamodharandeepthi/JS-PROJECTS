# Star Rating App ⭐

## HTML Structure 🧱

- Container Setup:

  - `<div class="container">`: Acts as the main wrapper.

- Card Setup:

  - `<div class="card">`: Contains the star rating interface.

- Heading:

  - `<h1>Star Rating App</h1>`: Displays the title.

- Star Ratings:

  - `<span class="star" onclick="genStar(1)">&#9733;</span>` to `<span class="star" onclick="genStar(5)">&#9733;</span>`: Five spans for star icons, each with an onclick event to generate star ratings.

- Output Display:

  - `<h3 id="output">Rating is 0/5</h3>`: Shows the current rating output.

## CSS Styling 🌈

- style the container div
- style the card div,h1,span,h3.

## Javascript Interactivity 🚀

1. **Variable Declaration**:

   - `let stars = document.getElementsByClassName("star");`: Retrieves all elements with class "star".
   - `let output = document.getElementById("output");`: Retrieves the element with id "output".

2. **Function `genStar(n)`**:

   - Clears existing ratings with `remove()` function.
   - Iterates from 0 to `n` (number of stars selected).
   - Assigns appropriate CSS class based on `n` to each star element.

3. **Function `remove()`**:

   - Resets all star elements to default state ("star" class).
   - Loops through each star element and removes additional classes.

4. **Execution**:

   - Updates `output` element with the current rating (`n` out of 5).
