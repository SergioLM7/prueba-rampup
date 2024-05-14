//Ejercicio 1
//Algoritmo que cuenta las veces que aparece una determinada letra en una frase

const cuentaLetras = (frase, palabra) => {
    let arrayFrase = Array.from(frase.toLowerCase());
    let conteo = 0;
    for (let i = 0; i < arrayFrase.length; i++) {
      if (arrayFrase[i] === palabra) {
        conteo++;
      }
    }
    return conteo;
  };

  //Ejercicio 2
  //Algoritmo que imprime los números impares entre un número dado por el usuario y los siguientes 50 números

  const impresionImpar = (numero) => {
    for (let i=numero; i<=numero+50; i++) {
      if (i%2 !== 0) {
          console.log(i);
      }
    }
    };