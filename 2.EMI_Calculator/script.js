function getEmi() {
  let amount = document.getElementById("amount").value;
  let interest = document.getElementById("rate").value;
  let tenure = document.getElementById("tenure").value;

  //calculate interest
  let interestValue = (amount * interest * tenure) / 100;
  //Emi calculate
  const total = +amount + +interestValue; 

  document.getElementById("emi").innerHTML = "EMI IS RS: " + total + "/-";
}
function resetEmi() {
  document.getElementById("amount").value = "";
  document.getElementById("rate").value = "";
  document.getElementById("tenure").value = "";
  document.getElementById("emi").innerHTML = "";
}
