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

/*function populateGrid() {
	for (var i=0;i<6;i++){
		var redirect = "http://www.youtube.com";
		var thumblink = i;
		document.write('<li><a href="' + redirect + '" target="_blank"><img src="assets/img/' + thumblink + '.jpeg" /></li>');
	}
}*/
