 function calculate ()
   {
   	
   	var cost = 0;
   	var attendee = document.getElementById("#attendee").value;
   	var dailyrate = document.getElementById("#dailyrate").value;
   	var result = (dailyrate * attendee)/28800;
  

   	window.setInterval(function () {
   	  cost = cost + result;
   	 
   	  document.getElementById("cost").innerHTML = "Cost: " + "£" + cost.toFixed(2) + "<p>"
  
   	}, 1000);
   	
	 var e = document.getElementById('avatar');
     e.style.display = 'inline';
   	


   }
 function toggle () {
     var e = document.getElementById('button');
     e.style.display = 'none';
     
    
 }
 
	
 
 /* INITIATE WITH ENTER KEY
  
 $(document).ready(function(){
     $("[id^='#attendee']" ).keypress(function(e){
       if(e.keyCode==13)
       $('#button').click();
     });
 }); 
 
 */

