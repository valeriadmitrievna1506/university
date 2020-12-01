/* Установите ширину боковой навигации до 250 пикселей */
function openNav() {
    document.getElementById("mySidenav").style.width = "100vw";
    $('html').toggleClass('non-scroll');
    $('body').toggleClass('non-scroll');
    console.log($('body').classList);
  }
  
  /* Установите ширину боковой навигации на 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    $('html').toggleClass('non-scroll');
    $('body').toggleClass('non-scroll');
  }