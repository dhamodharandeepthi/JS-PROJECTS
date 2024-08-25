# Birthday Countdown 🎂

This is a simple Birthday Countdown web application that calculates the time remaining until a specified date and displays it in a user-friendly format. The countdown updates in real-time, showing the number of days, hours, minutes, and seconds left until the birthday.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Customization](#customization)

## Features

- Real-time countdown display
- Responsive design with a modern, clean UI
- Easily customizable countdown date
- Displays an expiration message when the countdown reaches zero

## App link

https://birthday-timer-app-using-js.netlify.app/

## Demo

https://github.com/user-attachments/assets/12c34b8f-e03b-4d04-b024-bda0c6c446be

## Technologies Used

- **HTML5**: Structure of the webpage.
- **CSS3**: Styling the webpage, including the use of Flexbox for layout and Google Fonts for typography.
- **JavaScript (Vanilla JS)**: Logic for the countdown timer.

## Getting Started

To get a local copy of the project up and running, follow these simple steps.

### Prerequisites

You only need a modern web browser to run this project.

### Installation

1. **Clone the repository:**

2. **Navigate to the project directory:**

3. **Open the `index.html` file in your browser:**

## Usage

Once you open the `index.html` file in your browser, the countdown timer will automatically start, displaying the remaining time until the specified date.

## Customization

You can customize the countdown date by modifying the JavaScript code in the `script.js` file.

1. Open the `script.js` file.
2. Locate the following line:

   ```javascript
   let futureDate = new Date("Dec 27 2024 12:00:00").getTime();
   ```

3. Replace the date string `"Dec 27 2024 12:00:00"` with your desired date and time.

_Example:_

```javascript
let futureDate = new Date("Jan 1 2025 00:00:00").getTime();
```
