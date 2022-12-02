var run=setInterval(carre,250);

margin=0;
function carre (){
    if (margin==1150){
        clearInterval(run);
        run=setInterval(carre,50);
        margin=0;
    }
  else{
    margin+=5;
    var x=document.getElementById('1');
    x.style.marginLeft=margin+"px";

  }
}

var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },6000);
  };
  
  var classname = document.getElementsByClassName("button");
  
  for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', animateButton, false);
  }
  