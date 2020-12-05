document.addEventListener('DOMContentLoaded', () => {
	const elementosCarousel = document.querySelectorAll('.carousel');
	M.Carousel.init(elementosCarousel, {
		duration: 200,
		dist: -90,
		shift: 5,
		padding: 5,
		numVisible: 3,
		indicators: true,
		noWrap:false
	});
});