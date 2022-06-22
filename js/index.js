const header = document.querySelector("#header");
const bars = document.querySelector(".fa-solid");
const nav = document.querySelector(".nav");

bars.addEventListener('click',()=>{
	if (bars.classList.contains('fa-bars-staggered')) {
		bars.classList.remove('fa-bars-staggered')
		bars.classList.add('fa-x')
		nav.style.top="0";

	}else{
		bars.classList.add('fa-bars-staggered')
		bars.classList.remove('fa-x')
		nav.style.top="-100%";
	}
});



/* close nav bar onclick*/
var ulChild = document.getElementById("ul").children;
for (var i = 0; i < ulChild.length; i++) {
		ulChild[i].addEventListener('click', ()=>{
			if (window.matchMedia("(max-width: 860px)").matches){
				bars.classList.add('fa-bars-staggered')
				bars.classList.remove('fa-x')
				nav.style.top="-100%";
			}
		});
	}
