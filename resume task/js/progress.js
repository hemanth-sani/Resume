var delay = 500;
var progress =document.getElementsByClassName('progress-bar')
$progress.each(function(i) {
  $(this).delay(delay * i).animate({
    width: $(this).attr('aria-valuenow') + '%'
  }, delay);

  $(this).prop('Counter', 0).animate({
    Counter: $(this).text()
  }, {
    duration: delay,
    // easing: 'swing',
    step: function(now) {
     
    }
  });
});