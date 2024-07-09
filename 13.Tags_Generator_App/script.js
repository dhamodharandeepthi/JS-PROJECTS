let tags = document.getElementById("tags");
let inputTag = document.getElementById("input-tag");

inputTag.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    if (inputTag.value.trim() !== "") {
      const tag = document.createElement("li");
      tag.innerText = inputTag.value.trim();

      const deleteButton = document.createElement("button");
      deleteButton.classList.add("delete-button");
      deleteButton.innerText = "X";

      tag.appendChild(deleteButton);
      tags.appendChild(tag);

      inputTag.value = "";
    }
  }
});

tags.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-button")) {
    event.target.parentNode.remove();
  }
});
