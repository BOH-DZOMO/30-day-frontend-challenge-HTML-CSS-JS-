const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector("#create");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes")
}
showNotes();

function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}


createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let deleteImg = document.createElement("img");
    let b = document.createElement("br");
    deleteImg.src = "images/delete.png"
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable", "true");
    notesContainer.appendChild(inputBox).appendChild(b)
    inputBox.appendChild(deleteImg);

})

notesContainer.addEventListener("click", function(e){
    if (e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage()
    } 
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        });
    }
}) 
// document.addEventListener("keydown", event =>{
//     if (event.key == "enter"){
//         document.execCommand("insertLineBreak");
//         event.preventDefault();
//     }
// })
document.addEventListener("keydown", event => {
    if (event.key === "Enter" && event.target.hasAttribute("contenteditable")) {
        event.preventDefault();
        
        // Simple modern way
        document.execCommand("insertHTML", false, "<br>");
    }
});

