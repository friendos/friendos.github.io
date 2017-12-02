var myLocation = 0;

window.onscroll = function(e) {
	console.log('scroll');
    console.log(window.pageYOffset);
    myLocation = window.pageYOffset;

}

function scrollWindow(id) {
    var element = document.getElementById(id);
    var positionToMove = getPosition(element);
     var interval;
     if(myLocation <= positionToMove) {
        interval = setInterval(function() {
        	myLocation += 20;
        	window.scrollTo(0, myLocation);
           if(positionToMove <= myLocation) {
           	clearInterval(interval);
           } 
        },0.5) 
     } else {
     	interval = setInterval(function() {
        	myLocation -= 20;
        	window.scrollTo(0, myLocation);
           if(positionToMove >= myLocation) {
           	clearInterval(interval);
           } 
        },0.5) 
     }

    
}

function getPosition(el) {
   var currentPosition = 0;

   if(el.offsetParent) {
   	  currentPosition = el.offsetTop;
   }
   return currentPosition;
}
