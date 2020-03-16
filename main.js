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

  let removeButtons = document.getElementsByClassName("removeButton");

  for (i = 0; i < removeButtons.length; i++) {
  removeButtons[i].onclick = clickEvent => {
    const listItemToRemove = clickEvent.target.parentNode;
    removeListItem(listItemToRemove);
  };
}


function removeListItem(listItemElement) {
document.querySelector("#enteredValue").removeChild(listItemElement);
}
}

function reset() {
  let ul = document.querySelector("#enteredValue");
  ul.innerHTML = "";
  document.getElementById("inputNewValue").value = "";
}
