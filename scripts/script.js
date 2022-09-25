const links = document.querySelectorAll('a[href*="#"]');

for(let link of links){
	link.addEventListener("click", function(e){
		e.preventDefault();
		const BlockID = link.getAttribute('href');
		document.querySelector(''+ BlockID).scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	});
};
let offset = 0;
const slider = document.querySelector('.test_photo');

document.querySelector('.prev').addEventListener('click', function(){
	offset += 384;
	if(offset > 0) offset = -768;
	slider.style.left = offset + "px";
});
document.querySelector('.next').addEventListener('click', function(){
	offset -= 384;
	if(offset < -768) offset = 0;
	slider.style.left = offset + "px";
});