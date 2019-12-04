var addDiv = function(){
   $( "#content" ).append( "<div class='utasks' id='tsk1'></div>" );
}
$('.utasks').click(function(){
  $( "#content" ).append( "<p class='utasktitle'>Yo</p>" );
});
