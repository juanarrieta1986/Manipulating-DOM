let list = document.querySelector("#parentLI");
let childs = list.childNodes;
list.removeChild(childs[3]);
console.log(childs[3]);
