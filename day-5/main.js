//2 notes
// don't nest event listeners
// always use if statement to verify content or state of global varibles or rresources initiated somewhere else
//To do
// you can use DataTransfer and learn more about drag and drop API events

let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");


let selected = null;
for (const list of lists) {
  list.addEventListener("dragstart", (e) => {
    selected = e.target;
  });
  rightBox.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  rightBox.addEventListener("drop", (e) => {
   if (selected) {
    rightBox.appendChild(selected);
    selected = null;
   }
  });
  leftBox.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  leftBox.addEventListener("drop", (e) => {
    if (selected) {
        leftBox.appendChild(selected);
    selected = null;
    }
  });
}
