
	
	// 	let slides = Array.from(document.querySelectorAll('.carousel-item'));

	// 	let dots = Array.from(document.querySelectorAll('.indicators span'));

	// 	let index = slides.indexOf(document.querySelector('.active'));

	// 	function newSlide(num)
	// 	{
	// 		index += num
	// 		slides.forEach(slide=>{
	// 			slide.classList.remove('active')
	// 		})

	// 		dots.forEach(dot=>{
	// 			dot.classList.remove('current')
	// 		})
			
	// 		if(index > slides.length){
	// 			index = 1
	// 		}
	// 		if(index < 1)
	// 		{
	// 			index = slides.length;
	// 		}
	// 		slides[index - 1].classList.add('active')
	// 		dots[index - 1].classList.add('current');
	// 	}


	
	// document.querySelector('.next').addEventListener('click', function(){
	// 	newSlide(+1)
	// })
	// document.querySelector('.prev').addEventListener('click', function(){
	// 	newSlide(-1)
	// })

	

	// slide();

	// function slide (){

	// 	let slides = document.querySelectorAll('.carousel-item')

	// 	let dots = document.querySelectorAll('.indicators span')

	// 	for (var i = 0; i < slides.length; i++) {
	// 		slides[i].classList.remove('active')
	// 	}

	// 	for (var i = 0; i < dots.length; i++) {
	// 		dots[i].classList.remove('current')
	// 	}

	// 	index = index + 1;

	// 	if (index > slides.length)
	// 	{
	// 		index = 1
	// 	}
	// 	else if (index < 1)
	// 	{
	// 		index = slides.length
	// 	}

	// 	slides[index - 1].classList.add('active')
	// 	dots[index - 1].classList.add('current')
	// }



	// // document.addEventListener('DOMContentLoaded', function(){
	// // 	let timer = setInterval(slide, 2000);

	// // 	document.querySelector('.carousel-item').addEventListener('mouseover', function(){
	// // 	clearInterval(timer)
	// // 	})
	// // })

	// document.querySelector('.carousel-item').addEventListener('mouseout', function(){
	// 		let timer = setInterval(slide, 2000);

	// 		document.querySelector('.carousel-item').addEventListener('mouseover', function(){
	// 			clearInterval(timer);
	// 		})
	// 	})
