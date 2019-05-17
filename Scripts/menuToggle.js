const menuBtn = document.getElementById('menu-icon')
const mainMenuList = document.getElementById('main-menu-list')
menuBtn.addEventListener('click', function() {
    if (menuBtn.className === 'menu-icon ') {
        menuBtn.className = 'menu-icon active'
        mainMenuList.className = 'main-menu-list expanded'
    } else {
        menuBtn.className = 'menu-icon '
        mainMenuList.className = 'main-menu-list'
    }
    //alert(menuBtn.className);
})