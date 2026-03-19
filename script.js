let notes = JSON.parse(localStorage.getItem("notes")) || []

function renderNotes(){

let container = document.getElementById("notesContainer")
container.innerHTML=""

notes.forEach((note,index)=>{

let div = document.createElement("div")
div.className="note"

div.innerHTML = `
<span>${note}</span>
<button onclick="deleteNote(${index})">X</button>
`

container.appendChild(div)

})

}

function addNote(){

let input = document.getElementById("noteInput")
let note = input.value.trim()

if(note=="") return

notes.push(note)

localStorage.setItem("notes",JSON.stringify(notes))

input.value=""

renderNotes()

}

function deleteNote(index){

notes.splice(index,1)

localStorage.setItem("notes",JSON.stringify(notes))

renderNotes()

}

function searchNotes(){

let search = document.getElementById("search").value.toLowerCase()

let container = document.getElementById("notesContainer")

container.innerHTML=""

notes.forEach((note,index)=>{

if(note.toLowerCase().includes(search)){

let div=document.createElement("div")
div.className="note"

div.innerHTML = `
<span>${note}</span>
<button onclick="deleteNote(${index})">X</button>
`

container.appendChild(div)

}

})

}

renderNotes()