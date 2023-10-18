(() => {
// let myNumber: number = undefined;//No
// let myString: string = null;//No
let myNull: null = null;//Si
let myUndifined: undefined = undefined;//Si

let myNumber: number | null = null; //Posible de que number sea null
myNumber = 12;

let myString: string | undefined = undefined;
myString = 'aas'

function hi(name:string | null) {
  let hello = 'Hola '
if (name) {
  hello += name;
} else {
  hello += 'nobody';
}
console.log(hello);
}

//Sale el signo de interrogación y diria si esta expresión, no existe va a devolver un null, por que no se encuentra dentro de un if. por que se encuentra validando.
function hiV2(name:string | null) {
  let hello = 'Hola '
hello += name?.toLowerCase() ?? 'nobody';
console.log(hello);
}
hi('Nicolas');
hi(null);

hiV2('Nicolas');
hiV2(null);




})();
