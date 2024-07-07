let userName = document.getElementById("name");
let userEmail = document.getElementById("email");
let userMessage = document.getElementById("message");

//reset input fields
const resetHandler = () => {
  userName.value = "";
  userEmail.value = "";
  userMessage.value = "";
};

//handle submit

let submitHandler = () => {
  if (
    userName.value === "" ||
    userEmail.value === "" ||
    userMessage.value === ""
  ) {
    alert("Please Provide All Fields");
  } else {
    const contactFormData =
      userName.value + " " + userEmail.value + " " + userMessage.value;
    localStorage.setItem("formData", contactFormData);
    alert("your message sent successfully");
    resetHandler();
  }
};
