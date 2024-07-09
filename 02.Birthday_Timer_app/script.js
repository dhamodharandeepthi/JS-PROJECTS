let x = setInterval(() => {
  let futureDate = new Date("May 27 2024 12:00:00").getTime();
  console.log(futureDate);
  let currDate = new Date();
  console.log(currDate.getTime());
  let diff = futureDate - currDate;
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  let timerDiv = document.getElementById("timer");
  timerDiv.innerHTML = `${days} DAYS | ${hours}h : ${minutes}m : ${seconds}s`;

  if (diff < 0) {
    clearInterval(x);
    timerDiv.innerHTML = "Birthday expired";
  }
});
