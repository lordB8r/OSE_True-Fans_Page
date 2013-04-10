function openMenu()
{
	var bottom = document.getElementById("bottom");

	if(bottom.className.match(/Down/) != null)
		bottom.className = "Up";
	
	else
		bottom.className = "Down";
}

function makeDonation()
{
	window.open("https://www.paypal.com/");
}

function recordVideo()
{
	window.open("http://www.youtube.com/upload");
}

function sendEmail()
{
	window.location = "mailto:matt@zavteq.com?Subject=My%20Video&body=Please%20put%20the%20link%20to%20your%20video%20below...";
}

