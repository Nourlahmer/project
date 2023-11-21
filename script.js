let plus_btn = document.getElementsByClassName("plus_btn");
let qte = document.getElementById("qte");
for (let index = 0; index < plus_btn.length; index++) {
plus_btn[index].addEventListener("click", function () {
  qte.textContent = Number(qte.textContent) + 1;
  
});

}
