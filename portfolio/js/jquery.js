// This menu functioning was taken from https://www.youtube.com/watch?v=6pidsgeLLzE 
// jquery function
$(function() {
  $('.toggle').on('click', function() {
    if($('.list__item').hasClass('active')){
      $('.list__item').removeClass('active');
    } else {
      $('.list__item').addClass('active');
    }

  })
});