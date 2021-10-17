# Stateful App en React 

## Descripción
En la página se puede ver un input en el que se ingresara el nombre y el paragraph para el saludo. Cada vez que surge un cambio gracias al onChange se manda llamar a la función handleOnChange. En donde se cambia primero el estado del nombre en el paragraph, e inmediatamente después el cambio es guardado en el Local Storage como 'name'. El use Case tiene como valor inicial el valor que tiene 'name' en local storage, asi que cada vez que se actualice este, lo que estaba escrito en el input (que se guardó en el localStorage) aparecerá como valor inicial en el useState y por lo tanto en el paragraph.



## Hechos

  - [x] Una app web por default es STATELESS
  - [x] Todos aquellos eventos que el usuario no comienza, se consideran EFECTOS SECUNDARIOS.
  - [x] Para controlar dichos eventos SECUNDARIOS se utiliza USE EFFECT.
  - [x] Algunas maneras de persistir información son: bases de datos y LOCAL STORAGE.
  - [x] Para transformar cualquier tipo de valor en JS a strings, se utiliza JSON.stringify() y para regresar de string al tipo de valor original, se utiliza JSON.parse().