//1
const rectangleArea = (largo,ancho) =>  largo * ancho; /* Añade tu código aquí */

 
//2
const greet = (nombre) => "Hola, " + nombre + "!";

 
//3
const mergeArray = (arr1, arr2) =>  [...arr1, ...arr2];


//4 
const ducplicateAndSum  = (a, b, ...numeros) => {
   const suma = a + b;
   return numeros.map((numero) => numero + suma);
};

//5
const setExercise = () => {
   //Añade tu código aquí
   const mySet = new Set([0,0,1,1,2,2,3,4,5]);
   return mySet.size;
   };
   console.log(setExercise());
   
   
   
 


//6
const miMapa = new Map();
miMapa.set("nombre", "Juan");
miMapa.set("edad", 30);
miMapa.set("profesion", "Desarrollador");




const mapExercise = () => {
   //Añade tu código aquí
   
   miMapa.set("profesion", "Genius");
   miMapa.delete("edad");
};


//8
const countRepeated = (string) => {
   //Añade tu código aquí 
};

