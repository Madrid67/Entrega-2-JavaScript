
let numeros = [1, 2, 3, 4, 5];
let palabras = ["manzana", "banana", "naranja", "uva"];
let booleanos = [true, false, true, false];
let objetos = [
  { nombre: "Juan", edad: 30 },
  { nombre: "Maria", edad: 22 },
  { nombre: "Carlos", edad: 25 },
  { nombre: "Ana", edad: 29 }
];


let sumaNumeros = numeros.reduce((acum, num) => acum + num, 0);
console.log(sumaNumeros); 


let palabrasConcatenadas = palabras.reduce((acum, palabra) => acum + " " + palabra, "");
console.log(palabrasConcatenadas.trim()); 

let conteoVerdaderos = booleanos.reduce((acum, valor) => valor ? acum + 1 : acum, 0);
console.log(conteoVerdaderos); 


let sumaEdades = objetos.reduce((acum, obj) => acum + obj.edad, 0);
console.log(sumaEdades); 

//Método .filter()

let numerosFiltrados = numeros.filter(num => num > 2);
console.log(numerosFiltrados); 


let palabrasLargas = palabras.filter(palabra => palabra.length > 5);
console.log(palabrasLargas); 


let verdaderos = booleanos.filter(valor => valor === true);
console.log(verdaderos); 


let mayores25 = objetos.filter(obj => obj.edad > 25);
console.log(mayores25); 

//Método .map()

let numerosMultiplicados = numeros.map(num => num * 2);
console.log(numerosMultiplicados); 


let palabrasMayusculas = palabras.map(palabra => palabra.toUpperCase());
console.log(palabrasMayusculas); 


let negados = booleanos.map(valor => !valor);
console.log(negados); 


let edadesIncrementadas = objetos.map(obj => ({ ...obj, edad: obj.edad + 1 }));
console.log(edadesIncrementadas);


// Método .forEach()

numeros.forEach(num => console.log(num));


palabras.forEach(palabra => console.log(palabra));


booleanos.forEach(valor => console.log(valor));


objetos.forEach(obj => console.log(obj.nombre));

let sinParametros = () => console.log("Función sin parámetros");
sinParametros();

let unParametro = (nombre) => console.log(`Hola, ${nombre}`);
unParametro("Juan");

let dosParametros = (a, b) => a + b;
console.log(dosParametros(5, 3)); 

let tresParametros = (a, b, c) => a * b * c;
console.log(tresParametros(2, 3, 4)); 

let conDefecto = (a, b = 10) => a + b;
console.log(conDefecto(5)); 
console.log(conDefecto(5, 20)); 
