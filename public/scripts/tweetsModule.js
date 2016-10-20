var tweetModule = {}

function createTweetElement (tweetObj) {
    var data = tweetObj;
    var $tweet = $('<article>').addClass("tweets");
    var $header = $("<header>").addClass("tweet-header");
    var $img = $("<img>").addClass("tweetImg").attr("src", data.user.avatars.regular);
    var $pAt = $("<p>").addClass("atUser").text(data.user.handle);
    var $pUsername = $("<h2>").addClass("tweet-username").text(data.user.name);
    var $pTweet = $("<p>").addClass("tweet-text").text(data.content.text);
    var $footer = $("<footer>").addClass("tweet-footer").text(data.created_at);
    var $div = $("<div>").addClass("reshare");

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

  tweetModule.renderTweet = function (tweetArr) {
    tweetArr.forEach(function(tweetList) {
      var builtTweet = createTweetElement(tweetList);

      $('.tweetList').prepend(builtTweet); 

    });
    return true;
  }

  tweetModule.loadTweets = function (cb) {

    $.ajax({
      method: 'get',
      url: '/tweets',
      data: $(this).serialize(),
      dataType: 'json'
    }).done(function(data) {
      
      cb(data);
       
        
    });

  }

  module.exports = tweetModule;