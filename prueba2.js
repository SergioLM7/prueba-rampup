//Función que acepte una palabra como parámetro y la devuelva con todos sus caracteres 
//en mayúsculas y separados por espacios. Ejemplo: Para "Ana" devolverá "A N A".

const mayusculasSeparadas = (palabra) => {
    return palabra.toUpperCase().split("").join(" ");
};


//Declara una función que acepte un nombre como parámetro y devuelva 
//el número de palabras que tiene el nombre. Ejemplo: Para "Antonio Alberto Jesús" devolverá 3.

const numPalabras = (nombre) => {
    let arrayNombre = nombre.split(" ");
    let contador = 0;
    arrayNombre.forEach(nombre => contador++);
    return contador;
  
  };