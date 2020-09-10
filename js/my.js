var image1=new Image();
image1.src=“../images/ateez.jpg“ ;
var image2=new Image() ;
image2.src=“../images/dynamite.jpg“ ;
var image3=new Image() ;
image3.src=“../images/more and more.jpg“ ;
//variable that will increment through the images
var step=1
function slideit(){

//if browser does not support the image object, exit.
if (!document.images)

return;

document.images.slide.src=eval("image"+step+".src");

Image Slider

31

document.images.slide.src=eval("image"+step+".src");
if (step<3)
step++;

else

step=1;

//call function "slideit()" every 2.5 seconds
setTimeout("slideit()", 2500);

}
slideit()