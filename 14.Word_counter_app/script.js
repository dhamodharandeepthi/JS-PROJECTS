let wordCounts = function (words) {
  document.getElementById("output").innerHTML =
    "Words Length is : " + words + " 😊";
};
document.getElementById("countBtn").onclick = function () {
  wordCounts(document.getElementById("textarea").value.trim().length);
};

function resetWords() {
  document.getElementById("output").innerHTML = "";
  document.getElementById("textarea").value = "";
}
document.getElementById("resetBtn").onclick = function () {
  resetWords();
};
