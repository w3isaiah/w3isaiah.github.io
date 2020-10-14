// MAIN MENU

function mainFun()
{
var x = document.getElementsByClassName("menus");
var i = document.getElementById("main_btn");
for(var j=0; j<x.length; j++)
if( x[j].style.display == "block")
{
	x[j].style.display = "none";
	i.innerHTML = "M<br />E<br />N<br />U";
	i.style.marginLeft = "";
}
else
{
	x[j].style.display = "block";
	i.innerHTML = "H<br />I<br />D<br />E";
	i.style.marginLeft = "50%";
}
}