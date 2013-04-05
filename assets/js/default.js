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
	var sign = document.getElementById("signupForm");
	sign.style.display = "block";
	sign.className = "grow";

}

function submitForm()
{
	var sign = document.getElementById("signupForm");
	sign.style.display = "none";
	sign.className = "shrink";
}

function recordVideo()
{
	window.location = "http://www.youtube.com/upload";
}

function sendEmail()
{
	window.location = "mailto:matt@zavteq.com?Subject=My%20Video&body=Please%20put%20the%20link%20to%20your%20video%20below...";
}

