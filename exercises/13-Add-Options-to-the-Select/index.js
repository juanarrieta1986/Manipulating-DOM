window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	var dropDown = document.getElementById("mySelect");

	for (var i = 0; i < countries.length; i++) {
		var opt = i;
		var el = document.createElement("option");
		el.textContent = countries[i];
		el.value = countries[i];
		dropDown.appendChild(el);
	}

	let button = document.querySelector("#mySelect");
	button.addEventListener("change", event => {
		alert(event.target.value);
	});
};

