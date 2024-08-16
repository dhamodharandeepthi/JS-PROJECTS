# Contact us Form App 📩

App Link - https://contact-us-form-using-js.netlify.app/

https://github.com/user-attachments/assets/59d0868b-193f-45ac-a0c4-7211a3fa1487


## HTML Structure 🧱

1. Start with a container for the contact form:

   - `<div class="container">`

2. Within the container, create a section for the form:

   - `<div class="form-container">`

3. Add a heading for the contact form:

   - `<h1>Contact us</h1>`

4. Create form groups for each input field:

   - Use `<div class="form-group">` for each field.

5. Label and input for Name:

   - `<label for="name">Your Name :</label>`
   - `<input type="text" id="name" />`

6. Label and input for Email:

   - `<label for="email">Your email :</label>`
   - `<input type="text" id="email" />`

7. Label and textarea for Message:

   - `<label for="message">Message :</label>`
   - `<textarea id="message" cols="14"></textarea>`

8. Create a button group for Submit and Reset buttons:

   - `<div class="btn-group">`

9. Submit button:

   - `<input type="button" value="Submit" class="submitBtn" onclick="submitHandler()" />`

10. Reset button:

    - `<input type="button" value="Reset" class="resetBtn" onclick="resetHandler()" />`

11. Close all opened tags accordingly:
    - Close `</div>` tags for `btn-group`, `form-group`, `form-container`, and `container`.

## CSS Styling 🌈

- style the `container div`
- style the 'form container div,h1,formGroup div,buttonGroup div'

## Javascript Interactivity 🚀

1. Initialization:

   - Assume userName, userEmail, and userMessage are HTML input elements retrieved from the DOM.

2. Event Handlers:

   - resetHandler():

     - Function to reset the input fields userName, userEmail, and userMessage to empty strings.
     - This function is called when a reset action is triggered.

   - submitHandler():
     - Function to handle form submission.
     - Checks if userName, userEmail, and userMessage are not empty.
     - If any field is empty, alert "Please Provide All Fields".
     - If all fields are filled:
       - Concatenate userName, userEmail, and userMessage into contactFormData string.
       - Store contactFormData in localStorage with key "formData".
       - Alert "your message sent successfully".
       - Call resetHandler() to clear the input fields.

3. Execution:

   - Assume these functions are triggered by user actions, such as clicking a submit button or triggering a reset action on a form.

4. Visualization of Execution Flow:

   - Assume user fills out the form:

     - userName.value = "John Doe"
     - userEmail.value = "john.doe@example.com"
     - userMessage.value = "This is a test message"

   - Case 1: Submit with all fields filled:

     - submitHandler() checks if all fields are filled (true).
     - Creates contactFormData: "John Doe john.doe@example.com This is a test message".
     - Stores "formData" in localStorage.
     - Alerts "your message sent successfully".
     - Calls resetHandler() to clear input fields.

   - Case 2: Submit with one or more fields empty:

     - submitHandler() checks if all fields are filled (false).
     - Alerts "Please Provide All Fields".

   - Reset Action:
     - resetHandler() is triggered.
     - Clears userName, userEmail, and userMessage input fields.

5. Final Output (Alerts):

   - Successful submission: "your message sent successfully"
   - Fields not filled: "Please Provide All Fields"
