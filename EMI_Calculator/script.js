function getEmi() {
  let principal = document.getElementById("amount").value;
  let annualInterestRate = document.getElementById("rate").value;
  let tenureInYears = document.getElementById("tenure").value;

  // Convert annual interest rate to monthly and to a decimal
  let monthlyInterestRate = annualInterestRate / (12 * 100);

  // Convert tenure in years to number of monthly payments
  let numberOfMonths = tenureInYears * 12;

  // Calculate EMI
  let emi =
    (principal *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, numberOfMonths)) /
    (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);

  document.getElementById("emi").innerHTML = "EMI IS RS: " + emi.toFixed(2) + "/-";
}
function resetEmi() {
  document.getElementById("amount").value = "";
  document.getElementById("rate").value = "";
  document.getElementById("tenure").value = "";
  document.getElementById("emi").innerHTML = "";
}
