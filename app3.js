$(function(){
  $('.red').on('click', function(){
    $('ul').children().css('color', 'red');
  });
  
  $('.black').on('click', function(){
    $('ul').children().css('color', 'black');
  });
});