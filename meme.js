function generateName () {
	var x = document.getElementById("Value1").value;
	var y = document.getElementById("Value2").value;
	document.getElementById("x").innerHTML = x;
	document.getElementById("y").innerHTML = y;
	document.getElementById("x").classList += ('nontransparent');
	document.getElementById("y").classList += ('nontransparent');
}

