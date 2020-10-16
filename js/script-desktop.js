// MAIN MENU

function mainFun()
{
var x = document.getElementsByClassName("menus");
var i = document.getElementById("main_btn");
for(var j=0; j<x.length; j++)
if( x[j].style.display == "block")
{
	x[j].style.display = "none";
	i.innerHTML = "<h1>M<br />E<br />N<br />U</h1>";
	document.getElementById("main_btn").style.marginLeft = "";
}
else
{
	x[j].style.display = "block";
	i.innerHTML = "<h1>H<br />I<br />D<br />E</h1>";
	document.getElementById("main_btn").style.marginLeft = "50%";
}
}


function subjoc(){
	
var subjd = document.getElementById('subj');
if(subjd.style.display === "none")
{
	subjd.style.display = "";
}
else
{
	subjd.style.display = "none";
}

}