;var slider = document.getElementById('slider-range');
var sliderValue = document.getElementById('slider-value');

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