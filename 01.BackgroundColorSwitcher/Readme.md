# Background Color Switcher 🚥

## HTML Structure 🧱

1. **Container Setup**:

   - `<div class="container">`: This element wraps the entire content.

2. **Heading**:

   - `<h1>BG Color Switcher</h1>`: This line adds a heading with the text "BG Color Switcher."

3. **Instruction Paragraph**:

   - `<p>Please select a color for background</p>`: This line adds a paragraph with instructions.

4. **Color Switches List**:

   - `<ul id="switches">`: This element creates an unordered list to hold the color switches.
     - `<li id="orange"></li>`: List item with id "orange" for the orange color switch.
     - `<li id="green"></li>`: List item with id "green" for the green color switch.
     - `<li id="blue"></li>`: List item with id "blue" for the blue color switch.
     - `<li id="pink"></li>`: List item with id "pink" for the pink color switch.

## CSS Styling 🌈

- style the `container div`
- style the `h1 tag`
- style the `p tag`
- style the `ul and li`
  -Note: Don't add background color and text color for body

## Javascript Interactivity 🚀

1. **Event Handlers Setup**:

   - Assign functions to `onclick` events for elements with IDs `orange`, `green`, `blue`, and `pink`.

2. **Function Definitions**:

   - Define `switchToOrange()`, `switchToGreen()`, `switchToBlue()`, and `switchToPink()` functions.
   - Each function:
     - Sets `backgroundColor` of the `<body>` to respective color (`orange`, `green`, `blue`, `pink`).
     - Sets `color` of the text to `white`.
