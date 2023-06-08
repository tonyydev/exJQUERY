$(document).ready(function() {
  $('#contrast-btn').click(function() {
    $('body').toggleClass('contrast');
  });

  $('#font-increase-btn').click(function() {
    var currentFontSize = parseInt($('body').css('font-size'));
    $('body').css('font-size', currentFontSize + 2 + 'px');
  });

  $('#font-decrease-btn').click(function() {
    var currentFontSize = parseInt($('body').css('font-size'));
    $('body').css('font-size', currentFontSize - 2 + 'px');
  });

  $('#toggle-details-btn').click(function() {
    $('#product-details').toggle();
  });
});
