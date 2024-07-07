setInterval(() => {
  //date
  let currDate = new Date();
  let day = currDate.getDate();
  let month = currDate.getMonth() + 1;
  let year = currDate.getFullYear();

  //time
  let hours = currDate.getHours();
  let minutes = currDate.getMinutes();
  let seconds = currDate.getSeconds();
  let period = "AM";

  //conditions for date
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }
  //conditions for time
  if (hours > 12) {
    period = "PM";
  }
  if (hours > 12) {
    hours = hours - 12;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  //get the date element
  let dateEle = document.getElementById("date");
  dateEle.innerHTML = `${day}/${month}/${year}`;
  //get the time element
  let timeEle = document.getElementById("time");
  timeEle.innerHTML = `${hours} : ${minutes} : ${seconds}  ${period}`;
});
