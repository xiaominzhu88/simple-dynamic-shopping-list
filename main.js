function addInputValue() {
  const inputElement = document.querySelector("#inputNewValue");
  const val = inputElement.value;
  const listcontent = document.querySelector("#listContent");
  const ul = document.querySelector("#enteredValue");

  let addedList = document.createElement("li");
  let removeButton = document.createElement("button");

  if (val !== "" && val !== undefined) {
    removeButton.value = val;
    removeButton.style.marginLeft = "10px";
    removeButton.textContent = "-";
    removeButton.className = "removeButton";
    addedList.textContent = val;
    addedList.className = val;
    addedList.append(removeButton);
    ul.append(addedList);
  }
  listcontent.style.backgroundColor = "rgb(243, 220, 224)";
  listcontent.style.color = "rgb(82, 35, 82)";
  listcontent.style.fontFamily = "monospace";

  inputElement.value = "";

  let listItems = ul.getElementsByTagName("li");
  let removeButtons = document.getElementsByClassName("removeButton");
  //console.log(removeButtons);

  for (i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener("click", function() {
      ul.removeChild(this.parentNode);
    });
  }
}

function reset() {
  let ul = document.querySelector("#enteredValue");
  ul.innerHTML = "";
  document.getElementById("inputNewValue").value = "";
}
