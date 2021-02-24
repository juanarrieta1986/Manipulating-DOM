let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	var elem = document.createElement("DIV");
	elem.innerHTML = "Hello World";
	elem.style.background = "yellow";
	document.querySelector("Body").appendChild(elem);
});
/*var elem = document.createElement("H1");
elem.innerHTML = "Hello World";
document.querySelector("#myDiv").appendChild(elem);

//Your code here
// Don'change the code above
let par = document.createElement("P");
par.innerHTML = "Hello World";
par.style.background = "yellow";
document.querySelector("#myDiv").appendChild(par);*/
