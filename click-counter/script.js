let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0 

console.log(saveEl)

function increment(){
    count = count + 1
    countEl.textContent = count
}


function save(){
    let countStr = count + " - "

    saveEl.textContent += countStr;

    console.log(count)
}

let errormsg = document.getElementById("error");
function ab(){
errormsg.textContent = "something went wrong!"
}

function clearEntries() {
    saveEl.innerText = "previous entires:"; 
       count = 0;                                    countEl.innerText = count;
}
