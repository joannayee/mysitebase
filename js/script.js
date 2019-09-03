// document.addEventListener('DOMContentLoaded'), function () {
    //console.log("hi");
    var myMainButton = document.querySelector('.menu-button');
    var myMainMenu = document.querySelector('.site-header .site-navigation');
    console.log(myMainButton);
    console.log(myMainMenu);
    myMainButton.addEventListener('click', function () {
        // concole.log("Hey")
        myMainMenu.classList.toggle('expanded');
    
    });
// };