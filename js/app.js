$(document).ready(function() {
  var $heart = $(".heart--move"),
    $ellipsis = $(".fa-ellipsis-h"),
    $overlay = $(".overlay"),
    $close = $(".fa-times"),
    $cancel = $(".overlay__link--cancel");
  $heart.click(function() {
    var n = $('.heart--move').index(this);
    var num = $(".num:eq(" + n + ")").val();
    num = $(".num:eq(" + n + ")").val(num * 1 + 1);
    $(this).addClass("fa-heart heart-red");
    $(this).removeClass("fa-heart-o");
  });
  $ellipsis.click(function() {
    $overlay.fadeIn(300);
  });
  $close.click(closePopUp);
  $cancel.click(closePopUp);

  function closePopUp(event) {
    event.preventDefault();
    $overlay.fadeOut(300);
  }
});
