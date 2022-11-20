let skateClicked = document.getElementById("skate");

skateClicked.addEventListener("click", ()=>{
    if(document.getElementById("skate_m").style.display == "none")
        document.getElementById("skate_m").style.display = "block";
    else
        document.getElementById("skate_m").style.display = "none";
})

let violClicked = document.getElementById("viol");

violClicked.addEventListener("click", ()=>{
    if(document.getElementById("viol_m").style.display == "none")
        document.getElementById("viol_m").style.display = "block";
    else
        document.getElementById("viol_m").style.display = "none";
})

let guitClicked = document.getElementById("guit");

guitClicked.addEventListener("click", ()=>{
    if(document.getElementById("guit_m").style.display == "none")
        document.getElementById("guit_m").style.display = "block";
    else
        document.getElementById("guit_m").style.display = "none";
})