//var x = $("label[class^=utasks]").length  
var addDiv = function(){
   window.alert($("label[class^=utasks]").length)
   if ($("label[class^=utasks]").length <= 4){
      $( "#content" ).append( "<div class='utasks' id='tsk1'></div>" );
   }
   else {
        $( "#content" ).append( "<p class='utasktitle'>Yo</p>" );
   }
}
$('.utasks').click(function(){
  $( "#content" ).append( "<p class='utasktitle'>Yo</p>" );
});
