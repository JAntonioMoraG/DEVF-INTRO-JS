/**
 * Crea un código para llenar un objecto vacio:
 * 
 * const objeto = {}
 * 
 * Con las siguiente propiedades:
    * color
    * tamaño
    * peso
    * cantidad
   **/
const objeto = {};
Object.defineProperty(objeto,'color',{value:"rojo", writable:true,enumerable:true,configurable:true})
Object.defineProperty(objeto,'tamaño',{value:"1.2m", writable:true,enumerable:true,configurable:true})
Object.defineProperty(objeto,'peso',{value:"2kg", writable:true,enumerable:true,configurable:true})
Object.defineProperty(objeto,'cantidad',{value:200, writable:true,enumerable:true,configurable:true})
console.log(objeto)