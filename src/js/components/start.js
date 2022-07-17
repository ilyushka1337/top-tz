function start(){
	const overlay = document.querySelector('#overlay')
	const startBtn = overlay.querySelector('#start')
	const slider = document.querySelector('#slider')

	startBtn.addEventListener('click', () => {
		setTimeout(() => {
			overlay.classList.add('overlay--hidden')
			slider.classList.add('start-anim')
		}, 5000)
	}, { once: true })
}
start()