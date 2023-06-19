const btnColor1 = document.getElementById("btnColor1")

btnColor1.addEventListener("click", ()=>{
    btnColor1.style.fontSize = "40px";
    btnColor1.style.color = "black"
})

btnColor1.addEventListener("dblclick", ()=>{
    btnColor1.style.fontSize = "";
    btnColor1.style.color = ""
})
/*
btnColor1.addEventListener("dblclick", ()=>{
    btnColor1.classList.toggle("darkmode")
})
*/