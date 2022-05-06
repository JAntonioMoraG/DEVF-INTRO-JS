function reverse(w){
    return w.split("").reverse().join("");
}
const palindromo=(word)=>{
    pal=reverse(word)
    if(pal==word){
        return true
    }
    else{
        return false
    }
}
palindromo("madam")
palindromo("computadora")
palindromo("oso")