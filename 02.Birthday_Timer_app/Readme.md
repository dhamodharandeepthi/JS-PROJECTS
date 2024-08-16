# Birthday Countdown App 🥂✨🧁

App Link - https://birthday-timer-app-using-js.netlify.app/

https://github.com/user-attachments/assets/12c34b8f-e03b-4d04-b024-bda0c6c446be

## HTML Structure 🧱

1. **Container Setup**:

   - `<div class="container">`: Wrapper for the entire birthday countdown section.

2. **Birthday Box**:

   - `<div class="birthdayBox">`: Container for the birthday countdown elements.

3. **Heading**:

   - `<h1>Birthday Countdown 🎂</h1>`: Displays the heading with the text "Birthday Countdown 🎂".

4. **Horizontal Rule**:

   - `<hr />`: Adds a horizontal line for separation.

5. **Timer Display**:

   - `<div class="timer" id="timer">01day</div>`: Displays the countdown timer with the initial value "01day".

## CSS Styling 🌈

- style the `Container Div`
- style the `BirthdayBox div`
- style the `h1 tag`
- style the `hr`
- style the `timer div`

## Javascript Interactivity 🚀

1. Initialize a timer using setInterval():

   - Set a variable `x` to hold the setInterval function.

2. Get the future date and current date:

   - Create a new Date object for the future date "May 27 2024 12:00:00".
   - Calculate its time in milliseconds using getTime().
   - Get the current date and time using a new Date object.

3. Calculate the difference between future and current dates:

   - Compute the difference in milliseconds using subtraction.

4. Convert milliseconds difference into days, hours, minutes, and seconds:

   - Compute days using Math.floor(diff / (1000 _ 60 _ 60 \* 24)).
   - Compute hours using Math.floor((diff % (1000 _ 60 _ 60 _ 24)) / (1000 _ 60 \* 60)).
   - Compute minutes using Math.floor((diff % (1000 _ 60 _ 60)) / (1000 \* 60)).
   - Compute seconds using Math.floor((diff % (1000 \* 60)) / 1000).

5. Display the countdown timer on the webpage:

   - Get the HTML element where the timer will be displayed using getElementById().
   - Update its innerHTML with the formatted countdown timer string.

6. Handle the timer expiration:

   - If the difference is less than 0 (i.e., the future date has passed):
     - Stop the timer using clearInterval(x).
     - Update the timer display to indicate "Birthday expired".
