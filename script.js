
const msg = document.querySelector(".options");

 
function mudaParaSim() {
	
	document.getElementById("imgProfile").src = "imgs/profile2.gif";
	document.getElementById("msg").innerHTML = "Ih, mané! Aí sim!";
	
	
}


function mudaParaNao() {
	document.getElementById("imgProfile").src = "imgs/profile3.gif";
	document.getElementById("msg").innerHTML = "Meteu essa?";
	
}
 