// 0=me 1=piano 2=clock 3=calculator
var menuItems = document.getElementsByClassName("menu-item");
var activePage = "about-me";

//About me page
menuItems[0].addEventListener('click', function(e){
  document.getElementById("about-me").classList.add("ease-in");
  activePage = "about-me";
  changeActivePage();
  this.classList.add("menu-item-active");
});

//About piano page
menuItems[1].addEventListener('click', function(e){
  document.getElementById("about-piano").classList.add("ease-in");
  activePage = "about-piano";
  changeActivePage();
  this.classList.add("menu-item-active");
});

//About clock page
menuItems[2].addEventListener('click', function(e){
  document.getElementById("about-clock").classList.add("ease-in");
  activePage = "about-clock";
  changeActivePage();
  this.classList.add("menu-item-active");
});

//About calculator page
menuItems[3].addEventListener('click', function(e){
  document.getElementById("about-calculator").classList.add("ease-in");
  activePage = "about-calculator";
  changeActivePage();
  this.classList.add("menu-item-active");
});



function changeActivePage(){
  // clear pages except active page
  document.querySelectorAll(".content").forEach((item, i) => {
    if(item.id != activePage){
      item.classList.remove("ease-in");
    }
  });
  for(i = 0; i<4; i++){
    menuItems[i].classList.remove("menu-item-active");
  }

}
