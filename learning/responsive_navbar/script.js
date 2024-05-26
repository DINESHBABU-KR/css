var btn = document.getElementsByClassName('btn')[0];

var navlink = document.getElementsByClassName('nav_links')[0];

btn.addEventListener('click',()=>{
	console.log("btn Clicked")
	navlink.classList.toggle('active')
});