var addDiv = function(){
   x = "tsk"+($('#content .utasks').length+1).toString();
   y = ($('#content .utasks').length+1).toString();
   if ($('#content .utasks').length <= 3){
      $( "#content" ).append( "<div class='utasks' id='"+x+"' onclick='addtsk"+y+"()'></div>" );
   }
   else {
      window.alert("You already have 4 events! Try deleting one by clicking on it.");
   }
}
var addtsk1 = function(){
   window.alert("fuckyou1");
}
var addtsk2 = function(){
   window.alert("fuckyou2");
}
var addtsk3 = function(){
   window.alert("fuckyou3");
}
var addtsk4 = function(){
   window.alert("fuckyou4");
}
