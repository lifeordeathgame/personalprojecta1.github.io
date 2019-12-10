var addDiv = function(){
   x = $('#content .utasks').length.toString();
   if ($('#content .utasks').length <= 3){
      $( "#content" ).append( "<div class='utasks' id='"+x+"'></div>" );
   }
   else {
      window.alert("You already have 4 events! Try deleting one by clicking on it.");
   }
}
$('.utasks').click(function() {
  window.alert('hohoho');
});
