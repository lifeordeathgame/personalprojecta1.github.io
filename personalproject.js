var addDiv = function(){
   y = ($('#content .utasks').length+1).toString();
   if ($('#content .utasks').length <= 3){
      $( "#content" ).append( "<div class='utasks' id='tsk"+y+"' onclick='addtsk"+y+"()'></div>" );
   }
   else {
      window.alert("You already have 4 events! Try deleting one by clicking on it.");
   }
}
var addtsk1 = function(){
  var prmt = prompt("Please enter subject name:", "Math");
  if (prmt == null || prmt == "") {
     window.alert("You didn't enter a name")
     return;
  } else {
     $( "#tsk1" ).append( "<p class='utasktitle'>"+prmt+"</p>" );
  }
}
var addtsk2 = function(){
  var prmt = prompt("Please enter subject name:", "Math");
  if (prmt == null || prmt == "") {
     window.alert("You didn't enter a name")
     return;
  } else {
     $( "#tsk2" ).append( "<p class='utasktitle'>"+prmt+"</p>" );
  }
}
var addtsk3 = function(){
  var prmt = prompt("Please enter subject name:", "Math");
  if (prmt == null || prmt == "") {
     window.alert("You didn't enter a name")
     return;
  } else {
     $( "#tsk3" ).append( "<p class='utasktitle'>"+prmt+"</p>" );
  }
}
var addtsk4 = function(){
  var prmt = prompt("Please enter subject name:", "Math");
  if (prmt == null || prmt == "") {
     window.alert("You didn't enter a name")
     return;
  } else {
     $( "#tsk4" ).append( "<p class='utasktitle'>"+prmt+"</p>" );
  }
}
