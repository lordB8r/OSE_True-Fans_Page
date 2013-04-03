function init()
{}

function openMenu()
{
	var bottom = document.getElementById("bottom");

	if(bottom.className.match(/Down/) != null)
		bottom.className = "Up";
	
	else
		bottom.className = "Down";
}

function createForm()
{
	alert("creating form");
}

function recordVideo()
{
	window.location("http://www.youtube.com/upload");
}

function sendEmail()
{
	alert("sending email");
}

