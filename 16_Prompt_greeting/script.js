const userName = prompt("Enter Your Name,", "name");
const today = new Date();
const hrs = today.getHours();

document.writeln("<b>");

if (hrs <= 12) {
  document.write("Good Morning " + userName + "!");
} else if (hrs <= 18) {
  document.write("Good Afternoon " + userName + "!");
} else {
  document.write("Good Evening " + userName + "!");
}

document.writeln("</b>");
