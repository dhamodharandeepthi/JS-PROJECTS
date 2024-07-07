# Contact us Form App📩

## HTML Structure 🧱

1. **Container**:

   - `<div class="container">`: This element wraps the entire contact form section.

2. **Form Container**:

   - `<div class="form-container">`: This element wraps the content of the form.

3. **Heading**:

   - `<h1>Contact us</h1>`: Adds a heading with the text "Contact us."

4. **Form Group for Name**:

   - `<div class="form-group">`: Wraps the label and input for the name.
     - `<label for="name">Your Name :</label>`: Label for the name input field.
     - `<input type="text" id="name" />`: Text input field for the name.

5. **Form Group for Email**:

   - `<div class="form-group">`: Wraps the label and input for the email.
     - `<label for="email">Your email :</label>`: Label for the email input field.
     - `<input type="text" id="email" />`: Text input field for the email.

6. **Form Group for Message**:

   - `<div class="form-group">`: Wraps the label and textarea for the message.
     - `<label for="message">Message :</label>`: Label for the message textarea.
     - `<textarea id="message" cols="14"></textarea>`: Textarea input for the message.

7. **Button Group**:
   - `<div class="btn-group">`: Wraps the submit and reset buttons.
     - `<input type="button" value="Submit" class="submitBtn" onclick="submitHandler()" />`: Button to submit the form, calls `submitHandler()` function.
     - `<input type="button" value="Reset" class="resetBtn" onclick="resetHandler()" />`: Button to reset the form, calls `resetHandler()` function.

## CSS Styling 🌈

- style the `container div`
- style the 'form container div,h1,formGroup div,buttonGroup div'

## Javascript Interactivity 🚀

1. **Get elements by their IDs**:

   - `let userName = document.getElementById("name");`
   - `let userEmail = document.getElementById("email");`
   - `let userMessage = document.getElementById("message");`

   These lines retrieve the input elements for name, email, and message from the DOM.

2. **Define a function to reset input fields**:

   - `const resetHandler = () => { ... };`

   This function sets the value of each input field to an empty string, effectively clearing the form.

3. **Define a function to handle form submission**:

   - `let submitHandler = () => { ... };`

   This function checks if all fields are filled, stores the data in local storage, alerts the user, and resets the form.

4. **Check if any field is empty**:

   - `if (userName.value === "" || userEmail.value === "" || userMessage.value === "") { ... }`

   If any of the fields are empty, it alerts the user to provide all fields.

5. **Alert user if any field is empty**:

   - `alert("Please Provide All Fields");`

   Displays an alert prompting the user to fill in all fields.

6. **Concatenate form data into a single string**:

   - `const contactFormData = userName.value + " " + userEmail.value + " " + userMessage.value;`

   Combines the values of the name, email, and message fields into a single string.

7. **Store form data in local storage**:

   - `localStorage.setItem("formData", contactFormData);`

   Saves the concatenated form data in the browser's local storage.

8. **Alert user of successful submission**:

   - `alert("your message sent successfully");`

   Notifies the user that their message was sent successfully.

9. **Reset input fields**:

   - `resetHandler();`

   Calls the `resetHandler` function to clear the form fields after successful submission.
