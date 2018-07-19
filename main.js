//Starts 3D parallax scene
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

//Enables glare effect for Tilt.js
$('#tiltEl').tilt({
  glare: true,
  maxGlare: 0.5, //determines how bright the glare is
  scale: 1.3 //scales tilt element
})

$('#paintBase').tilt({
  scale: 1.8 //scales tilt element
})

$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true
	});

	//methods
	$.fn.fullpage.setAllowScrolling(false);
});