$(document).ready(function() {
  $('.box1').slideDown(1000, function (){
    $('.box1').css({
      'width': '200px',
      'height': '100px',
      'background-color': '#0000FF'
    }).slideUp(1000);
  });
});
  
