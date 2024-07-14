let countEl = document.getElementById("countEl")
let count = 0
function increment() {
    count += 1
    countEl.innerText = count
}

let saveEl = document.getElementById("save-text")
function saveCount(){
    savedText = count + " - "
    saveEl.textContent += savedText
    count = 0
    countEl.innerText = count


}