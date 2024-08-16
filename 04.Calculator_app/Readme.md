# Calculator app 📱

App Link -https://calculator-app-using-javascript.netlify.app/

https://github.com/user-attachments/assets/d1383923-f9b7-419a-9081-bb2e93daa0bf

**HTML DESIGN** 📄

## HTML Structure for Calculator Form

### Container Setup

- `<div class="container">`: Acts as the main wrapper for the calculator.

### Form Setup

- `<form id="cal-form" name="calculater">`: Defines a form with an ID and a name for scripting purposes.

### Display Section

- `<div class="display">`: Container for the calculator display.
  - `<input type="text" name="display" readonly />`: Text input field for displaying calculator input/output, set to read-only.

### Button Group

- `<div class="button-group">`: Container for calculator buttons.

#### Number and Operator Buttons

- Number Buttons:
  - `<input type="button" value="7" onclick="calculater.display.value +='7'" />`: Button for number 7, appends '7' to the display.
  - Similar setup for buttons 8, 9, 4, 5, 6, 1, 2, 3, 0.
- Arithmetic Operator Buttons:
  - `<input type="button" value="+" class="arthmatic-btn" onclick="calculater.display.value +='+'" />`: Button for addition, appends '+' to the display.
  - Similar setup for '-', '\*', '/'.

#### Clear and Equals Buttons

- Clear Button:
  - `<input type="button" value="C" class="arthmatic-btn" onclick="calculater.display.value =''" />`: Clears the display when clicked.
- Equals Button:
  - `<input type="button" value="=" class="arthmatic-btn" onclick="calculater.display.value = eval(calculater.display.value)" />`: Evaluates the expression in the display using JavaScript `eval()` function and displays the result.

**CSS DESIGN** 🌈

- style the container div
- style the form div
- style the display div
- style the btngroup div

**javascript** ｡🇯‌🇸‌

- add onclick event to all btn in btnGroup
- `+=` used while clicking all button button values are append to display
- `=''` while clicking `C` btn it will empty the whatever in display
- `eval()`is called while clicking `=` to perform arthmatic operation
