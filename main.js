const pQuant = document.querySelectorAll(".p-quant");

for (i = 0; i < pQuant.length; i++) {
  pQuant[i].addEventListner("click", incQuant);
}

function incQuant(e) {
  if (e.target.className.contains("q_add")) {
    console.log("hi");
  }
}
