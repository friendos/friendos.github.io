function downFromPortfolio(elementFrom,elementTo) {

 var fromPositionEl = document.getElementById(elementFrom).offSetTop;
var toPositionEl = document.getElementById(elementTo).offSetTop;

if(fromPositionEl <= toPositionEl) {
        interval = setInterval(function() {
        	fromPositionEl += 10;
        	window.scrollTo(0, fromPositionEl);
           if(toPositionEl <= fromPositionEl) {
           	clearInterval(interval);
           } 
        },0.5) 
     }
 
}

