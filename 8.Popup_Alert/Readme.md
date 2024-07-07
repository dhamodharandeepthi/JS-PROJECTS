# Popup Alert 🚨

## HTML Structure 🧱

1️. **Container Setup**:

   - `<div class="container">`: Wraps the entire subscription section.

2️. **Heading**:

   - `<h1 id="heading">Subscribe to my channel</h1>`: Adds a heading with the text.

3️. **Popup Setup**:

   - `<div class="popup">`: Contains the popup message.
     - `<i class="fa-regular fa-circle-check"></i>`: Includes a success icon.
     - `<h2>you have subscribed!</h2>`: Displays the subscription confirmation message.
     - `<br />`: Adds a line break for spacing.
     - `<button id="closeBtn">Close</button>`: Button to close the popup.

4️. **Subscribe Button**:

   - `<button id="showBtn">Subscribe now</button>`: Button to show the popup.

## CSS Styling 🌈

- style the `container div`
- style the `heading,popup,closeBtn,showBtn,fa-regular`

## Javascript Interactivity 🚀

1️. **Select elements**:

   - `let showBtn = document.getElementById("showBtn");`
   - `let closeBtn = document.getElementById("closeBtn");`
   - `let popup = document.querySelector(".popup");`
   - `let heading = document.getElementById("heading");`

2️. **Add click event listener to `showBtn`**:

   - `showBtn.addEventListener("click", () => {`
     - Show the popup: `popup.style.display = "block";`
     - Hide the subscribe button: `showBtn.style.display = "none";`
     - Hide the heading: `heading.style.display = "none";`
   - `});`

3️. **Add click event listener to `closeBtn`**:
   - `closeBtn.addEventListener("click", () => {`
     - Hide the popup: `popup.style.display = "none";`
     - Hide the subscribe button: `showBtn.style.display = "none";`
     - Change heading text: `heading.innerText = "😊Thank you for subscribing my channel";`
     - Show the heading: `heading.style.display = "block";`
   - `});`
