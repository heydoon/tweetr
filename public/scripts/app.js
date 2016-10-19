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
    //footer


    $($tweet).append($header);
    $($header).append($pAt);
    $($header).append($img);
    $($header).append($pUsername);

    $($tweet).append($pTweet);

    $($tweet).append($footer);
    $($footer).append($div);
    var $tweetList = $("<li>").append($tweet);
    return $tweetList;
  }

  function renderTweet (tweetArr) {
    tweetArr.forEach(function(tweetList) {
      var builtTweet = createTweetElement(tweetList);

      $('.tweetList').append(builtTweet); 

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

  

  // var tweetObj = [
  //   {
  //     "user": {
  //       "name": "Newton",
  //       "avatars": {
  //         "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
  //         "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
  //         "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
  //       },
  //       "handle": "@SirIsaac"
  //     },
  //     "content": {
  //       "text": "If I have seen further it is by standing on the shoulders of giants"
  //     },
  //     "created_at": 1461116232227
  //   },
  //   {
  //     "user": {
  //       "name": "Descartes",
  //       "avatars": {
  //         "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
  //         "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
  //         "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
  //       },
  //       "handle": "@rd" },
  //     "content": {
  //       "text": "Je pense , donc je suis"
  //     },
  //     "created_at": 1461113959088
  //   },
  //   {
  //     "user": {
  //       "name": "Johann von Goethe",
  //       "avatars": {
  //         "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
  //         "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
  //         "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
  //       },
  //       "handle": "@johann49"
  //     },
  //     "content": {
  //       "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
  //     },
  //     "created_at": 1461113796368
  //   } ]

loadTweets(renderTweet);
});