$(document).ready(function(){
  var $grid = $('.grid');
  for (var i = 0; i < 256; i++){
    $grid.append('<div class="square empty"></div>');
  }
  $('div.square.empty').hover(function(){
    $(this).removeClass('empty');
  });
});