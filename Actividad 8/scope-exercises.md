# JS Scoping exercises

1. What’s the result of executing this code and why.
  ```js
  function test() {
     console.log(a);
     console.log(foo());
     
     var a = 1;
     function foo() {
        return 2;
     }
  }
  
  test();
  ```

> _your answer here_  va a regresar undefined y 2 porque al imprimir a aun no la definimos y al imprimir en consola la funcion foo() se imprime el retorno de la funcion que es 2

> _console answer_ undefined y 2


2. What is result?
  ```js
  var a = 1; 
  
  function someFunction(number) {
    function otherFunction(input) {
      return a;
    }
    
    a = 5;
    
    return otherFunction;
  }
  
  var firstResult = someFunction(9);
  var result = firstResult(2);
  ```
> _your answer here_ 5

> _console answer_ 5


3. What is the result of the following code? Explain your answer.
  ```js
  var a = 1
  function foo() {
    var a = 2;

    function bar() {
      console.log( a );
    }

    return bar;
  }
  var baz = foo();
  baz();
  ``` 
> _your answer here_ 2 porque al entrar a la funcion foo a cambia su valor a 2 y entra a la funcion bar la cual imprime en consola el valor de a que en ese momento es 2 y la funcoin foo retorna a la funcion bar(la impresion en consola de 2), despues a baz se le asigna la funcion foo que recordemos que imprime en pantalla el 2 y al mandar a llamar a baz() esta tiene el resultado de la funcion foo

> _console answer_ 2


4. What will you see in the console for the following example?
  ```js
  var a = 1; 
  function b() { 
      a = 10; 
      return; 
      function a() {} 
  } 
  b(); 
  ```

> _your answer here_ No retorna nada b por lo tanto debe salir undefined

> _console answer_ undefined
