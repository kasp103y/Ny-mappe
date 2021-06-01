window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("SidenVises");
  document.querySelector("#menu_knap").addEventListener("click", toggleMenu);
}

function toggleMenu() {
  console.log("toggleMenu");
  this.offsetLeft;
  document.querySelector("#menu").classList.toggle("hidden");
  document.querySelector("#menu").classList.toggle("unhidden");
  this.offsetLeft;

  //let erSkjult = document.querySelector("#menu").classList.contains(".open_burger");

  // if (erSkjult == ".open_burger") {document.querySelector("#menu_knap").textContent = ;}
  //else  {document.querySelector("#menu_knap").textContent = "X";
}
