 function calculate ()
   {
   	
    var cost = 0;
   	var attendee = document.getElementById("#attendee").value;
   	var dailyrate = document.getElementById("#dailyrate").value;
   	var result = (dailyrate * attendee)/28800;
  

   	window.setInterval(function () {
   	  cost = cost + result;
   	 
   	  document.getElementById("cost").innerHTML = "Cost: " + "£" + cost.toFixed(2) + "<p>"
       
       const collection = document.getElementsByClassName("avatar");
       for (let i = 0; i < collection.length; i++) {
  collection[i].style.display = "none";
       }

  if (cost < 5) {
        a1.style.display = 'none';  
        
        
      } 
         
        else if (cost > 5) {
          var a2 = document.getElementById('sapling'); 
          var a3 = document.getElementById('ref'); 
          a2.style.display = 'inline';
          a3.style.display = 'inline';
          document.getElementById("sapling").innerHTML = "<img src='img/sapling.png'width='200'></img>"+  "<p>" + "Number of trees you could plant: " + cost.toFixed()/5 

          
        }
       

       
     
    
    
    }, 1000);

     

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

