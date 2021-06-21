let phI;
window.onload = function(){
	$('.navbar-nav>li>a').on('click', function() { $('.navbar-collapse').collapse('hide'); })
	
	phI = 11;
	nextph();

	hideConsulting('consulting-educ');
	hideConsulting('consulting-fund');
	hideConsulting('consulting-empresas');

}

function hideConsulting(pID) {
  var x = document.getElementById(pID);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}