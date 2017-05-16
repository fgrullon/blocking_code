//This code was made to block a html document to been use

//Here we used a IIFE function to be automaticaly invoke when the document where this js file is attached
(function () {
  //We set a variable initilize two variables type Date
  var date=new Date(), _now=new Date();;

//We now assing to the date variable the date we want to the document expire
      date.setFullYear(2018,7,20);

/*In this if with transform the two variables to MS using the + sign and compare 
  if the actual date is greater than the expecify date we set to expire, if so the 
  we set a background color of white, and set a image on top of everything with a warning message */
  
  if(+_now > +date){ 

   document.body.style.backgroundColor = "white";
   document.body.innerHTML = '<div ><img style="width: 100%; height:100%;" src="warning.png"></div>';

   }
})();
