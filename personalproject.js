var oneclicks = 0;
var twoclicks = 0;
var threeclicks = 0;
var fourclicks = 0;
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
  if (oneclicks == 0) {
    var prmt = prompt("Please enter subject name:", "Math");
    if (prmt == null || prmt == "") {
      window.alert("You didn't enter a name")
      return;
    } else {
      $( "#tsk1" ).append( "<p class='utasktitle'>"+prmt+"</p>" );
      var oneclicks += 1;
    }
  }
  else if (oneclicks == 1) {
    var prmt = prompt("Please enter task date (DD/MM/YYYY):", "1/1/2020");
    if (prmt == null || prmt == "") {
      window.alert("You didn't enter a date")
      return;
    } else {
      $( "#tsk1" ).append( "<p class='utasktitle'>"+prmt+"</p>" );
      var oneclicks += 1;
    }
  }
  else {
    var prmt = prompt("Are you sure you want to delete this?", "yes");
    if (prmt == "yes") {
      $(#tsk1).remove();
    } else {
      return;
    }
  }
}
var addtsk2 = function(){
  if (oneclicks == 0) {
    var prmt = prompt("Please enter subject name:", "Math");
    if (prmt == null || prmt == "") {
      window.alert("You didn't enter a name")
      return;
    } else {
      $( "#tsk2" ).append( "<p class='utasktitle'>"+prmt+"</p>" );
      var oneclicks += 1;
    }
  }
  else if (oneclicks == 1) {
    var prmt = prompt("Please enter task date (DD/MM/YYYY):", "1/1/2020");
    if (prmt == null || prmt == "") {
      window.alert("You didn't enter a date")
      return;
    } else {
      $( "#tsk2" ).append( "<p class='utasktitle'>"+prmt+"</p>" );
      var oneclicks += 1;
    }
  }
  else {
    var prmt = prompt("Are you sure you want to delete this?", "yes");
    if (prmt == "yes") {
      $(#tsk2).remove();
    } else {
      return;
    }
  }
}
var addtsk3 = function(){
  if (oneclicks == 0) {
    var prmt = prompt("Please enter subject name:", "Math");
    if (prmt == null || prmt == "") {
      window.alert("You didn't enter a name")
      return;
    } else {
      $( "#tsk3" ).append( "<p class='utasktitle'>"+prmt+"</p>" );
      var oneclicks += 1;
    }
  }
  else if (oneclicks == 1) {
    var prmt = prompt("Please enter task date (DD/MM/YYYY):", "1/1/2020");
    if (prmt == null || prmt == "") {
      window.alert("You didn't enter a date")
      return;
    } else {
      $( "#tsk3" ).append( "<p class='utasktitle'>"+prmt+"</p>" );
      var oneclicks += 1;
    }
  }
  else {
    var prmt = prompt("Are you sure you want to delete this?", "yes");
    if (prmt == "yes") {
      $(#tsk3).remove();
    } else {
      return;
    }
  }
}
var addtsk4 = function(){
  if (oneclicks == 0) {
    var prmt = prompt("Please enter subject name:", "Math");
    if (prmt == null || prmt == "") {
      window.alert("You didn't enter a name")
      return;
    } else {
      $( "#tsk4" ).append( "<p class='utasktitle'>"+prmt+"</p>" );
      var oneclicks += 1;
    }
  }
  else if (oneclicks == 1) {
    var prmt = prompt("Please enter task date (DD/MM/YYYY):", "1/1/2020");
    if (prmt == null || prmt == "") {
      window.alert("You didn't enter a date")
      return;
    } else {
      $( "#tsk4" ).append( "<p class='utasktitle'>"+prmt+"</p>" );
      var oneclicks += 1;
    }
  }
  else {
    var prmt = prompt("Are you sure you want to delete this?", "yes");
    if (prmt == "yes") {
      $(#tsk4).remove();
    } else {
      return;
    }
  }
}
