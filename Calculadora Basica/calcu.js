var value=document.getElementById("value")
var pantalla=""
function uno(){
    pantalla=pantalla+"1"
    value.textContent=pantalla
}
function dos(){
    pantalla=pantalla+"2"
    value.textContent=pantalla
}
function tres(){
    pantalla=pantalla+"3"
    value.textContent=pantalla
}
function cuatro(){
    pantalla=pantalla+"4"
    value.textContent=pantalla
}
function cinco(){
    pantalla=pantalla+"5"
    value.textContent=pantalla
}
function seis(){
    pantalla=pantalla+"6"
    value.textContent=pantalla
}
function siete(){
    pantalla=pantalla+"7"
    value.textContent=pantalla
}
function ocho(){
    pantalla=pantalla+"8"
    value.textContent=pantalla
}
function nueve(){
    pantalla=pantalla+"9"
    value.textContent=pantalla
}
function cero(){
    pantalla=pantalla+"0"
    value.textContent=pantalla
}
function punto(){
    pantalla=pantalla+"."
    value.textContent=pantalla
}
function ac(){
    pantalla=""
    value.textContent="0"
}
function mas(){
    pantalla=pantalla+"+"
    value.textContent=pantalla
}
function menos(){
    pantalla=pantalla+"-"
    value.textContent=pantalla
}
function por(){
    pantalla=pantalla+"*"
    value.textContent=pantalla
}
function entre(){
    pantalla=pantalla+"/"
    value.textContent=pantalla
}
function igual(){
    result=eval(pantalla)
    pantalla=result
    value.textContent=result
}
function del(){
    pantalla=pantalla.substring(0,pantalla.length-1)
    value.textContent=pantalla
}





