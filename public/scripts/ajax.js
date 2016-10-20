$(function () {
  $('.new-tweet form').on('submit', function (event) {
    event.preventDefault();
    formTextArea = $(this).find("textarea").val();
    if (formTextArea !== null && formTextArea !== "" && formTextArea.length < 140) {
      $.ajax({
        method: 'post',
        url: '/tweets',
        data: $(this).serialize(),      
      }).then(function(data) {
        location.reload();
      }).fail(function(data) {
        alert("Failed to tweet");
      });
    } else {
      alert("Please either enter a tweet or don't enter more than 140 characters!")
    }

  });
  formTextAreaFocus = $(this).find("textarea");

  $('.composeButton').on('click', function () {
    // if ($('.container section').hasClass("new-tweet-none")) {
    //   $('.container section').addClass("new-tweet");
    // }
    // if ($('.container section').hasClass("new-tweet")) {
    //   $('.container section').removeClass("new-tweet-none");
    // }


    $('.new-tweet').slideToggle();
    $(formTextAreaFocus).focus();
  });
});