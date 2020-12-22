$('.burger-icon').click(function(e) {
  console.log(e.target);
  $('.burger-icon').toggleClass("active");
  $('.sidenav').toggleClass("active");
});
$('.sidenav').click(function(e) {
  console.log(e.target);
  $('.burger-icon').toggleClass("active");
  $('.sidenav').toggleClass("active");
});