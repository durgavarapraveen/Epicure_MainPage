// var width = screen.width;
// console.log(width);
// fitphoto()
// function fitphoto() {
//   if(width > 500) {
//     carousel();
//     var el = document.getElementsByClassName("imh");
//     el.style.visibility = "hidden";
//   }
//   else {
//     carousel1();
//     var el = document.getElementsByClassName("imh");
//     el.style.visibility = "hidden";
//   }
//   setTimeout(fitphoto, 3000);
// }


var myIndex = 0;
carousel();
function carousel() {
  var i;
  var x = document.getElementsByClassName("imh");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000); // Change image every 2 seconds
}

var myIndex1 = 0;


function carousel1() {
  var i;
  var x = document.getElementsByClassName("imh1");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex1++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel1, 3000); // Change image every 2 seconds
}





function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



