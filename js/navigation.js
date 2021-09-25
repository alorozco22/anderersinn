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
  let x = document.getElementById(pID);
  let w = 'fa-';
  let y = document.getElementById(w.concat(pID));
  console.log(y);
  if (x.style.display === "none") {
    x.style.display = "block";
    y.className = "fa fa-angle-up";
  } else {
    x.style.display = "none";
    y.className = "fa fa-angle-down";;
  }
}