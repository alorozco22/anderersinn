function cuidamos() {
	document.getElementById('principio').innerHTML = "<span class='ph-emphasis'>La vida puede lastimar a las personas</span>. La estructura de los sistemas sociales, políticos, económicos, etc. puede afectar a los individuos inintencionalmente. En Anderer Sinn, estamos comprometidos con escuchar y apropiarnos de los valores y condiciones de las personas."
}

function interd() {
	document.getElementById('principio').innerHTML = "La creación de nuevos objetos amerita <span class='ph-emphasis'>entender los procesos desde todas sus dimensiones</span>. La tecnología que se desarrolla debe ser coherente con esto."
}

function intuicion() {
	document.getElementById('principio').innerHTML = "Diseñar requiere <span class='ph-emphasis'>navegar entre las formas concretas y las intuiciones informales</span> continuamente. Un/a diseñador/a debe sentirse cómodo/a modelando en ambos contextos."
}

function colaboracion() {
	document.getElementById('principio').innerHTML = "<span class='ph-emphasis'>Expandimos las posibilidades individuales mediante la colaboración</span>. Hacemos preguntas entre nuestros equipos y a otras personas todo el tiempo. Disfrutamos colaborar con otras organizaciones y con las personas con quienes compartimos."
}

function divulga() {
	document.getElementById('principio').innerHTML = "Los diseños no existen para ser abandonados en una isla, se crean para ser comunicados y utilizados entre las personas. <span class='ph-emphasis'>Los diseños conectan a la gente</span> porque tratan sobre lo que creemos y lo que somos."
}

function sostenible() {
	document.getElementById('principio').innerHTML = "Tenemos hasta 2050 para reducir las emisiones de carbono a cero. Nuestros proyectos deben esforzarse por tener un <span class='ph-emphasis'>impacto ambiental positivo o neutral</span>. Además, nuestros diseños son financieramente <span class='ph-emphasis'>autosostenibles</span>."
}

function curioso() {
	document.getElementById('principio').innerHTML = "<span class='ph-emphasis'>Aprender es uno de los grandes placeres del diseño</span>. Todo proyecto sigue una estrategia pedagógica por medio de Aprendizaje Basado en Proyectos para entrenar las competencias del equipo. Se adquieren progresivas responsabilidades también."
}

function noblog(){
	alert('Próximamente.');
}

function reiniciarc(){
	$('.carousel').carousel(0);
}
function backc(){
	$('.carousel').carousel('prev');
}
function nextc(){
	$('.carousel').carousel('next');
}


/* New principles section */
let slide = ['ph1', 'ph2' , 'ph3', 'ph4', 'ph5', 'ph6', 'ph7', 'ph8', 'ph9', 'ph10', 'ph11', 'ph12'];
// Inicializamos el índice phI = 12 en navigation.js que se carga después

function nextph(){
	if (phI == 11){
		// Si llegamos a la última slide, reiniciar ínidice
		phI = 0;
	} else {
		// si no hemos llegado a la última, solo sumarle
		phI = phI + 1;
	}

	// Ocultamos todos los elementos
	let elementosFilo = document.querySelectorAll("[class^=ph]");
	let elementosActuales = document.getElementsByClassName(slide[phI]);
	
	for (let i = elementosFilo.length - 1; i >= 0; i--) {
		// para todos los elementos de la diapositiva actual mostrar
		elementosFilo[i].style.display = 'none';

	}

	// Cargamos elementos que sí son
	for (let i = elementosActuales.length - 1; i >= 0; i--) {
		// para todos los elementos de la diapositiva actual mostrar
		elementosActuales[i].style.display = 'block';
	}

	let elementosEnfasis = document.getElementsByClassName('ph-emphasis');
	// Todos los ph-emphasis que estén block se cambian a inline
	for (let i = elementosEnfasis.length - 1; i >= 0; i--) {
		// para todos los elementos de la diapositiva actual mostrar
		if(elementosEnfasis[i].style.display == 'block'){
			elementosEnfasis[i].style.display = 'inline';
		}
	}	

}

function backph(){
	if (phI == 0){
		// Si llegamos a la primera slide, reiniciar ínidice
		phI = 11;
	} else {
		// si no hemos llegado a la última, solo restarle
		phI = phI - 1;
	}

	// Ocultamos todos los elementos
	let elementosFilo = document.querySelectorAll("[class^=ph]");
	let elementosActuales = document.getElementsByClassName(slide[phI]);
	
	for (let i = elementosFilo.length - 1; i >= 0; i--) {
		// para todos los elementos de la diapositiva actual mostrar
		elementosFilo[i].style.display = 'none';

	}

	// Cargamos elementos que sí son
	for (let i = elementosActuales.length - 1; i >= 0; i--) {
		// para todos los elementos de la diapositiva actual mostrar
		elementosActuales[i].style.display = 'block';
	}

	let elementosEnfasis = document.getElementsByClassName('ph-emphasis');
	// Todos los ph-emphasis que estén block se cambian a inline
	for (let i = elementosEnfasis.length - 1; i >= 0; i--) {
		// para todos los elementos de la diapositiva actual mostrar
		if(elementosEnfasis[i].style.display == 'block'){
			elementosEnfasis[i].style.display = 'inline';
		}
	}	
}





















