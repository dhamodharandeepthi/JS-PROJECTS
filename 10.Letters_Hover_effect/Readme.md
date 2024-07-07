# Letters Hover Effect 🌊

## HTML Structure 🧱

1. **Container Setup**:

   - `<h1 class="letters">`: Defines a heading with the class "letters".

2. **Text Span Elements**:

   - `<span>H</span>` to `<span>D</span>`: Each `<span>` element wraps an individual letter of the text "HELLO WORLD".

3. **Spaces**:

   - `<span> </span>`: Adds a space between "HELLO" and "WORLD".

## CSS Styling 🌈

- style h1 tag,span tag
- create bounce animation using `@keyframes`.

## Javascript Interactivity 🚀

1. **Query Selector All**:

   - `document.querySelectorAll(".letters>span").forEach((element) => {`
     - Selects all `<span>` elements inside elements with class `letters`.

2. **Event Listener**:

   - `element.addEventListener("mouseover", (event) => {`
     - Listens for mouseover events on each selected `<span>`.

3. **Bounce Function**:

   - `function bounce(letter) {`
     - Defines a function `bounce` that adds and removes a CSS class to create a bouncing effect.

4. **Check Bounce Class**:

   - `if (!letter.classList.contains("bounce")) {`
     - Checks if the element does not already have the `bounce` class.

5. **Add Bounce Class**:

   - `letter.classList.add("bounce");`
     - Adds the `bounce` class to initiate the bounce effect.

6. **Timeout**:

   - `setTimeout(function () {`
     - Delays for 1000 milliseconds (1 second) before removing the `bounce` class.

7. **Remove Bounce Class**:

   - `letter.classList.remove("bounce");`
     - Removes the `bounce` class after the delay.
