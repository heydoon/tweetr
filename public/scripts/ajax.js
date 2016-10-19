$(function () {
  $('.new-tweet form').on('submit', function (event) {
    event.preventDefault();
    $.ajax({
      method: 'post',
      url: '/tweets',
      data: $(this).serialize(),
    }).done(function(data) {
      
    }).then(function(data) {
      location.reload();
    });

  });

});