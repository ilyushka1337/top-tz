import Swiper, { Pagination, Navigation } from 'swiper';


function initSlider(){
	const container = document.querySelector('#slider')
	const activePreviewClass = 'slider-preview--active'
	
	const swiper = new Swiper(container,{
		speed: 750,
		modules: [Pagination, Navigation],
		slideActiveClass: 'main-slider__slide--active',
		pagination: {
			el: container.querySelector('.slider-pagination'),
			bulletClass: 'slider-pagination__bullet',
			bulletElement: 'button',
			bulletActiveClass: 'slider-pagination__bullet--active',
			clickable: true
		},
		navigation:{
			prevEl: container.querySelector('.main-slider__nav--prev'),
			nextEl: container.querySelector('.main-slider__nav--next'),
			disabledClass: 'slider-nav--disabled'
		}
	})

	const activatePreview = preview => preview.classList.add(activePreviewClass)
	const deactivatePreview = preview => preview.classList.remove(activePreviewClass)
	const findActivePreview = () => previews.find(preview => preview.matches(`.${activePreviewClass}`))

	const onPreviewClick = (preview) => {
		const index = parseInt(preview.dataset.index)
		swiper.slideTo(index)
	}

	const previews = [...container.querySelectorAll('.slider-preview')]
	previews.forEach(preview => preview.addEventListener('click', () => onPreviewClick(preview)))
	activatePreview(previews[0])

	swiper.on('slideChange', () => {
		deactivatePreview(findActivePreview())
		activatePreview(previews[swiper.activeIndex])
	})
}
initSlider()