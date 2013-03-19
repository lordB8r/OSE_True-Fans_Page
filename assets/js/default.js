var goDown = true;
var browserID = 0;

function init()
{
	var index;
	var version;
	var browser = navigator.userAgent;

	if((index = browser.search("Firefox/")) != -1)
	{
		version = browser.substring(index+8, browser.length-1);

		if(parseInt(version) > 15)
			browserID = 1;
		else
			browserID = 2;
	}

}

function openMenu()
{
	var abottom = document.getElementById("bottom");
	var buttons = document.getElementById("tableButtons");
	switch(browserID)
	{
		case 0: //Chrome, Safari
			if(!goDown)
			{
				abottom.style.webkitAnimationName = "slideUp";
				abottom.style.webkitAnimationPlayState ="running";
				buttons.style.webkitAnimationName = "fadeOut";
				buttons.style.webkitAnimationDelay = "0s";
				buttons.style.webkitAnimationPlayState ="running";
			}
			else
			{
				abottom.style.webkitAnimationName = "slideDown";
				abottom.style.webkitAnimationPlayState ="running";
				buttons.style.webkitAnimationName = "fadeIn";
				buttons.style.webkitAnimationPlayState ="running";
			}
			break;

		case 1: //Firefox 16.0+ ; IE 10 ; opera 12.1 - 12.5
			if(!goDown)
			{
				abottom.style.animationName = "slideUp";
				abottom.style.animationPlayState ="running";
				buttons.style.animationName = "fadeOut";
				buttons.style.animationDelay = "0s";
				buttons.style.animationPlayState ="running";
			}
			else
			{
				abottom.style.animationName = "slideDown";
				abottom.style.animationPlayState ="running";
				buttons.style.animationName = "fadeIn";
				buttons.style.animationPlayState ="running";
			}
			break;
		case 2: //Firefox 5.0-15.0 
			if(!goDown)
			{
				abottom.style.mozAnimationName = "slideUp";
				abottom.style.mozAnimationPlayState ="running";
				buttons.style.mozAnimationDelay = "0s";
				buttons.style.mozAnimationName = "fadeOut";
				buttons.style.mozAnimationPlayState ="running";
			}
			else
			{
				abottom.style.mozAnimationName = "slideDown";
				abottom.style.mozAnimationPlayState ="running";
				buttons.style.mozAnimationName = "fadeIn";
				buttons.style.mozAnimationPlayState ="running";
			}
			break;
		
	}
	goDown = !goDown;
}
