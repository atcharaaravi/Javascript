var slideposition = document.getElementById("slide");

counter=1;
slideShowFunction = function(){
    
        slideposition.src="image"+counter+".jpg";
        counter++;
        if(counter >= 5 ){
            counter=1;
    }
}
setInterval(slideShowFunction,2000);