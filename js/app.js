$(document).ready(function() {
  var $heart = $(".fa-heart-o"),
    $ellipsis = $(".fa-ellipsis-h"),
    $overlay = $(".overlay"),
    $close = $(".fa-times");
  $heart.click(function() {
    $(this).toggleClass("fa-heart-o fa-heart heart-pumping");
  });
  $ellipsis.click(function() {
    $overlay.fadeIn(300);
  });
  $close.click(function() {
    $overlay.fadeOut(300);
  })
});
