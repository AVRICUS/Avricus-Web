// code for toggling the menu in small screens
const menuButton = document.getElementById("menuIcon");
const mobileList = document.getElementsByClassName("navbar-mobile-items");
menuButton.onclick = function() {
    mobileList[0].classList.toggle("navbar-mobile-items-clicked");
} 


// code for animation on scroll on public pages
window.onload = function(){const appearOptions = {
	threshold:0,
	rootMargin:"0px 0px -40px 0px"
}
const appearboxes = document.querySelectorAll(".faders");
const appearOnScroll = new IntersectionObserver(
	function(entries,appearOnScroll){
		entries.forEach(entry=>{
			if(!entry.isIntersecting){
				return;
			}
			else{
				entry.target.classList.add("appear");
				appearOnScroll.unobserve(entry.target);
			}
		});
	},
	appearOptions);
  appearboxes.forEach(appearbox=>{
  	appearOnScroll.observe(appearbox);
  });
  const slideOptions = {
  	threshold:0,
  	rootMargin:"0px 0px 0px 0px"
  };
  const teamsliders = document.querySelectorAll(".sliders")
  const slideOnScroll = new IntersectionObserver(
    function(entries,slideOnScroll){
    	entries.forEach(entry => {
    	   if(!entry.isIntersecting){
    	   	return;
    	   }
    	   else{
    	   	entry.target.classList.add("slide");
    	   	slideOnScroll.unobserve(entry.target);
    	   }	
    	});
    },slideOptions);
  
  teamsliders.forEach(teamslider => {
  	slideOnScroll.observe(teamslider);
  });
}

// end of code fpor animation on scroll
