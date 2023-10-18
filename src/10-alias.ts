//Fuction de ambito auto-ejecutada
//Inferido y explicito
(() =>{
  // la forma que vamos a crear nuestros propios tipos
  type UserID = string | number;
let userId: UserID;

 // Literal types - ejemplo de tamaño de camisas.
 type Sizes = 'S' | 'M' | 'L' | 'XL';
let shirtSize: Sizes;

shirtSize = 'M';
shirtSize = 'L';
shirtSize = 'XL';
shirtSize = 'S';

function greetingsizes(userId: UserID, size: Sizes) {
  if (typeof userId === 'string') {
    console.log(`string ${userId.toLowerCase()}`);
  } else {
    console.log(`sizes ${size.toString()}`);

  }
 }
 greetingsizes('Nicolas','M');
 greetingsizes(1111, 'M');
})();
