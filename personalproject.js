var addDiv = function(){
   var ok = true;

   if (ok === true) {
      var udiv = document.createElement('div');
      udiv.setAttribute("class","utasks");    
      document.getElementsByTagName('content')[0].appendChild(udiv);
   }
}
