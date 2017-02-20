;var 	slider = document.getElementById('slider-range'),
			sliderValue = document.getElementById('slider-value'),
			hamburger = document.getElementById('hamburger'),
			menu = document.getElementById('nav-menu');

noUiSlider.create(slider, {
	start: [ 25000 ],
	connect: [true, false],
	range: {
		'min': [  15000 ],
		'25%': [  25000 ],
		'50%': [  60000 ],
		'max': [ 200000 ]
	}
});

slider.noUiSlider.on('update', function( values, handle ) {
	sliderValue.value = Math.round(values[handle]);
	return false;
});

sliderValue.addEventListener('change', function(){
	slider.noUiSlider.set(this.value);
});

hamburger.addEventListener('click', toggleMenu);

function toggleMenu(){
	if (menu.className == 'menu') {
		menu.className = 'menu menu--close';
		hamburger.className = 'hamburger';

	} else{
		menu.className = 'menu';
		hamburger.className = 'hamburger hamburger-active';
	}
}

