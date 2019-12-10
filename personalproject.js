//var x = $("label[class^=utasks]").length  
//var x = $('#content .utasks').length
var addDiv = function(){
   window.alert($('#content .utasks').length)
   if ($('#content .utasks').length <= 4){
      $( "#content" ).append( "<div class='utasks' id='tsk1'></div>" );
   }
   else {
        $( "#content" ).append( "<p class='utasktitle'>Yo</p>" );
   }
}
$('.utasks').click(function(){
  $( "#content" ).append( "<p class='utasktitle'>Yo</p>" );
});
