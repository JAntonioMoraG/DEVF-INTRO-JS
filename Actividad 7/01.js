var bool=false
const searchWord=(text,word)=>{
    arr=text.split(" ")
    for(i=0;i<arr.length;i++){
        if(arr[i]==word){
            console.log(arr[i])
            bool=true
        }
    }
    return bool
}
texto=prompt("Ingresa una oracion")
palabra=prompt("Ingresa la palabra a buscar")
searchWord(texto,palabra)