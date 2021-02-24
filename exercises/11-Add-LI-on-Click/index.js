let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	var elem = document.createElement("LI");
	elem.innerHTML = "New element in list";
	document.querySelector("UL").appendChild(elem);
});
