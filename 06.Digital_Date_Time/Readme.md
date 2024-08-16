# Digital Date and Time 📅⏱️

App Link - https://digital-date-time-using-js.netlify.app/

https://github.com/user-attachments/assets/2f67a1f8-194b-4821-b0e1-76b2f4e43fd7

## HTML Structure 🧱

1. **Container Setup**:

   - `<div class="container">`: Creates a container for the clock and date elements.

2. **Date Display**:

   - `<h2 id="date" class="date"></h2>`: Displays the current date inside the container.

3. **Clock Container**:

   - `<div class="clock-container">`: Container for the clock display.

4. **Time Display**:

   - `<h1 id="time">12:00:00 AM</h1>`: Displays the current time in 12-hour format inside the clock container.

## CSS Styling 🌈

- style the `container div`
- style the `h2 for date display
- style the `div for clock display`

## Javascript Interactivity 🚀

1. Initialization:

   - Start setInterval function, which executes repeatedly after a specified interval.

2. Inside setInterval:

   - Initialize currDate with the current date and time.
     - Example: If the current date and time is July 9, 2024, 15:30:25.
   - Get day, month, and year from currDate:

     - day = 9
     - month = 7
     - year = 2024

   - Get hours, minutes, and seconds from currDate:

     - hours = 15
     - minutes = 30
     - seconds = 25

   - Initialize period as "AM".

3. Conditions for Formatting Date:

   - Check if day < 10:

     - Update day to "09".

   - Check if month < 10:
     - Update month to "07".

4. Conditions for Formatting Time:

   - Check if hours > 12:

     - Update period to "PM".

   - Check if hours > 12:

     - Update hours to hours - 12 (e.g., 15 becomes 3).

   - Check if hours < 10:

     - Update hours to "03" (from 3).

   - Check if minutes < 10:

     - Update minutes to "30".

   - Check if seconds < 10:
     - Update seconds to "25".

5. Update HTML Elements:

   - Get the element with id "date" and update its innerHTML to formatted date:

     - Example: "09/07/2024".

   - Get the element with id "time" and update its innerHTML to formatted time:
     - Example: "03 : 30 : 25 PM".

6. Repeat:
   - Wait for the next interval and repeat the above steps to update the date and time displayed on the webpage.
