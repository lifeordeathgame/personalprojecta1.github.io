document.getElementById("text").addEventListener('click', add);
var addRect = function(){
   var ok = true;

   if (ok === true) {
      var div = document.createElement('div');

      div.idName = "add";       
      document.getElementsByTagName('body')[0].appendChild(div);
   }
}


