/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(function() {

  function createTweetElement(tweetObj) {
    var data = tweetObj;
    //header
    var $tweet = $('<article>').addClass("tweets");
    $tweet.on("mouseenter mouseleave", function() {
      $(this).find(".reshare").toggleClass("show");
    });
    var $header = $("<header>").addClass("tweet-header");
    var $img = $("<img>").addClass("tweetImg").attr("src", data.user.avatars.regular);
    var $pAt = $("<p>").addClass("atUser").text(data.user.handle);
    var $pUsername = $("<h2>").addClass("tweet-username").text(data.user.name);
    //header

    //twitter text
    var $pTweet = $("<p>").addClass("tweet-text").text(data.content.text);
    //twitter text

    //footer
    var $footer = $("<footer>").addClass("tweet-footer").text(data.created_at);
    var $div = $("<div>").addClass("reshare");
    var $i = $("<i>").addClass("fa fa-heart");
    var $i2 = $("<i>").addClass("fa fa-flag");
    var $i3 = $("<i>").addClass("fa fa-share");
    //footer


    $($tweet).append($header);
    $($header).append($pAt);
    $($header).append($img);
    $($header).append($pUsername);

    $($tweet).append($pTweet);

    $($tweet).append($footer);
    $($footer).append($div);
    $($div).append($i);
    $($div).append($i2);
    $($div).append($i3);

    var $tweetList = $("<li>").append($tweet);
    return $tweetList;
  }

  function renderTweet (tweetArr) {
    tweetArr.forEach(function(tweetList) {
      var builtTweet = createTweetElement(tweetList);

      $('.tweetList').prepend(builtTweet); 

    });
    return true;
  }

  function loadTweets (cb) {

    $.ajax({
      method: 'get',
      url: '/tweets',
      data: $(this).serialize(),
      dataType: 'json'
    }).done(function(data) {
      
      cb(data);
      
    });
  }
loadTweets(renderTweet);
 $('.new-tweet form').on('submit', function (event) {
    event.preventDefault();
    formTextArea = $(this).find("textarea").val();
    if (formTextArea !== null && formTextArea !== "" && formTextArea.length < 140) {
      $.ajax({
        method: 'post',
        url: '/tweets',
        data: $(this).serialize(),      
      }).then(function(data) {
        loadTweets(renderTweet);

        $("textarea").val(" ");
        $("textarea").focus();
                           
      }).fail(function(data) {
        alert("Failed to tweet");
      });
    } 

    if (formTextArea === null || formTextArea === ""){
      alert("Please enter a tweet");
    } else if (formTextArea.length > 140) {
      alert("Only 140 characters allowed")
    }

  });

  formTextAreaFocus = $(this).find("textarea");

  $('.composeButton').on('click', function () {
    $('.new-tweet').slideToggle();
    $(formTextAreaFocus).focus();
  });
});

