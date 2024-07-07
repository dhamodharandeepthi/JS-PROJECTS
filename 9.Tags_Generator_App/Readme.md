# Tags Generator App 🏷️

## HTML Structure 🧱

- `<div class="container">`: Container for the entire application.
  - `<h1>Tag Generator App</h1>`: Heading for the application.
  - `<div class="tags-input">`: Container for tag input functionality.
    - `<ul id="tags"></ul>`: Unordered list to display entered tags.
    - `<input type="text" placeholder="Enter tag name" id="input-tag" />`: Input field for entering tag names.

## CSS Styling 🌈

- style the 'container div'
- styel `h1` tag,tags-input div,tags ul,input tag

## Javascript Interactivity 🚀

1. **Select Elements**:

   - `let tags = document.getElementById("tags");`
   - `let inputTag = document.getElementById("input-tag");`

2. **Add Event Listener for Input**:

   - `inputTag.addEventListener("keydown", (event) => {`

3. **Check for Enter Key**:

   - `if (event.key === "Enter") {`
   - Prevent default action: `event.preventDefault();`

4. **Check for Non-Empty Input**:

   - `if (inputTag.value.trim() !== "") {`

5. **Create Tag Element**:

   - `const tag = document.createElement("li");`
   - Set tag text: `tag.innerText = inputTag.value.trim();`

6. **Create Delete Button**:

   - `const deleteButton = document.createElement("button");`
   - Add class: `deleteButton.classList.add("delete-button");`
   - Set button text: `deleteButton.innerText = "X";`

7. **Append Delete Button to Tag**:

   - `tag.appendChild(deleteButton);`

8. **Append Tag to Tags List**:

   - `tags.appendChild(tag);`

9. **Clear Input Field**:

   - `inputTag.value = "";`
   - `}` (close inner if statement)
   - `}` (close outer if statement)
   - `});` (close event listener)

10. **Add Event Listener for Tags List**:

    - `tags.addEventListener("click", (event) => {`

11. **Check for Delete Button Click**:

    - `if (event.target.classList.contains("delete-button")) {`

12. **Remove Parent Tag Element**:
    - `event.target.parentNode.remove();`
    - `}` (close if statement)
    - `});` (close event listener)
