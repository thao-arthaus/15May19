const menuBtn = document.getElementById("ah__menu-btn");
const mainMenuList = document.getElementById("ah__main-nav");
const menuBtnBar = document.getElementsByClassName("ah__menu-btn__bar");
menuBtn.addEventListener("click", function() {
  //alert("testing");
  // console.log(menuBtnBar);
  for (let i = 0; i < menuBtnBar.length; i++) {
    if (menuBtnBar[i].className === "ah__menu-btn__bar") {
      menuBtnBar[i].className = "ah__menu-btn__bar active";
      mainMenuList.className = "ah__main-nav expanded";
    } else {
      menuBtnBar[i].className = "ah__menu-btn__bar";
      mainMenuList.className = "ah__main-nav";
    }
  }
});
