// Your code here
let task = document.querySelector("#addToDo");
task.addEventListener("keydown", function(e) {
	if (e.keyCode === 13) {
		//checks whether the pressed key is "Enter"
		if (e.target.value != "") {
			var list = document.querySelector("ul");
			var newLiElem = document.createElement("LI");
			newLiElem.innerHTML = "<span><i class='fa fa-trash'></i></span> " + e.target.value;
			document.querySelector("UL").appendChild(newLiElem);
		}
	}
});

let listElem = document.querySelector("ul");
listElem.addEventListener("click", function(e) {
	console.log(e);
	let elemToDelete = e.target.parentElement.parentElement;
	elemToDelete.className = "deleteLI";
	var element = listElem.getElementsByClassName("deleteLI");
	listElem.removeChild(elemToDelete);
});
