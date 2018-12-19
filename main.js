// get elements from the dom
const pQuant = document.getElementsByClassName("p_quant");
const pAdd = document.getElementsByClassName("p_add");
const pCount = document.getElementsByClassName("p_count");
const pRemove = document.getElementsByClassName("p_remove");
const cartAction = document.getElementsByClassName("cart-action");

// increase the pCount value
for (i = 0; i < pAdd.length; i++) {
  pAdd[i].addEventListener("click", increaseCount);
  function increaseCount(e) {
    const parent = e.target.parentElement.parentElement;
    const child = parent.children;
    const childArray = Array.from(child);
    let incCount = childArray[1].innerHTML;
    if (incCount >= 0) {
      incCount++;
    }
    childArray[1].innerHTML = incCount;
  }
}

// decrease the pCount value
for (i = 0; i < pRemove.length; i++) {
  pRemove[i].addEventListener("click", decreaseCount);
  function decreaseCount(e) {
    const parent = e.target.parentElement.parentElement;
    const child = parent.children;
    const childArray = Array.from(child);
    let incCount = childArray[1].innerHTML;
    if (incCount > 0) {
      incCount--;
    }
    childArray[1].innerHTML = incCount;
  }
}

// add/delete action button
for (i = 0; i < cartAction.length; i++) {
  cartAction[i].addEventListener("click", deleteAction);
  function deleteAction(e) {
    let targetElement = e.target.innerHTML;
    if (targetElement === "delete") {
      e.target.innerHTML = "add_circle";
      e.target.parentElement.parentElement.children[1].children[1].innerHTML = 0;
      e.target.parentElement.parentElement.children[1].style.visibility =
        "hidden";
    }
    if (targetElement === "add_circle") {
      e.target.innerHTML = "delete";
      e.target.parentElement.parentElement.children[1].children[1].innerHTML = 1;
      e.target.parentElement.parentElement.children[1].style.visibility =
        "visible";
    }
  }
}
