$(function() {
  $(".new-tweet textarea").on("keyup", function() {
    const MAXCHARS = 140;
    var lengthOfTextarea = $(this).val().length;
    if (lengthOfTextarea >= MAXCHARS) {
      $(".counter").addClass("overlimit");
    } else {
      $(".counter").removeClass("overlimit");
    }     
    $(".counter").text(MAXCHARS - lengthOfTextarea);
  });    
}); 


//assign class for styles
