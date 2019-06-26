let aboutSlidingBlocksLeft = document.querySelectorAll('.about__item:nth-child(odd)');
let aboutSlidingBlocksRight = document.querySelectorAll('.about__item:nth-child(even)');
let portfolioSlidingBlocksLeft = document.querySelectorAll('.works__item:nth-child(odd)');
let portfolioSlidingBlocksRight = document.querySelectorAll('.works__item:nth-child(even)');

for (let i = 0; i < aboutSlidingBlocksLeft.length; i++) {

	aboutSlidingBlocksLeft[i].style.opacity = '0';

}

for (let i = 0; i < aboutSlidingBlocksRight.length; i++) {

	aboutSlidingBlocksRight[i].style.opacity = '0';

}

for (let i = 0; i < portfolioSlidingBlocksLeft.length; i++) {

	portfolioSlidingBlocksLeft[i].style.opacity = '0';

}

for (let i = 0; i < portfolioSlidingBlocksRight.length; i++) {

	portfolioSlidingBlocksRight[i].style.opacity = '0';

}

function slideToRight(element) {

	let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
	let elementTopPosition = element.getBoundingClientRect().top;

	if (elementTopPosition + 100 < scrollTop + window.innerHeight) {

		element.style.animation = 'slide-to-right 2s ease';

	}

}

function slideToLeft(element) {	

	let scrollTop = window.pageYOffset;
	let elementTopPosition = element.getBoundingClientRect().top;

	if (elementTopPosition + 100 < scrollTop + window.innerHeight) {

		element.style.animation = 'slide-to-left 2s ease';

	}

}

window.addEventListener('scroll', function() {

	for (let i = 0; i < aboutSlidingBlocksLeft.length; i++) {

		setTimeout(function() {

			slideToLeft(aboutSlidingBlocksLeft[i]);
			aboutSlidingBlocksLeft[i].style.opacity = '1';

		}, 0);	

	}

	for (let i = 0; i < aboutSlidingBlocksRight.length; i++) {

		setTimeout(function() {

			slideToRight(aboutSlidingBlocksRight[i]);
			aboutSlidingBlocksRight[i].style.opacity = '1';
			
		}, 100);

	}

	for (let i = 0; i < portfolioSlidingBlocksLeft.length; i++) {

		setTimeout(function() {

			slideToLeft(portfolioSlidingBlocksLeft[i]);
			portfolioSlidingBlocksLeft[i].style.opacity = '1';
			
		}, 100);	

	}

	for (let i = 0; i < portfolioSlidingBlocksRight.length; i++) {

		setTimeout(function() {

			slideToRight(portfolioSlidingBlocksRight[i]);
			portfolioSlidingBlocksRight[i].style.opacity = '1';
			
		}, 100);	

	}

});