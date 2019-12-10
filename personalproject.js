var addDiv = function(){
   if ($('#content .utasks').length <= 3){
      $( "#content" ).append( "<div class='utasks' id='tsk1'></div>" );
   }
   else {
      window.alert("You already have 4 events! Try deleting one by clicking on it.");
   }
}
$('.utasks').click(function() {
  window.alert('hohoho');
});
