//Fuction de ambito auto-ejecutada
//Inferido y explicito
//any traduce cualquiera
(()=>{
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar = '';

  //cast convertir de mayusculas a minisculas
// case transformar de un tipo a otro
  myDynamicVar = 'HOLA';
  const rta = (myDynamicVar as string).toLowerCase();
  console.log(rta);

  //cast de un numero puede ser asi
  myDynamicVar = 1212;
  const rta1 = (<number> myDynamicVar).toFixed();
  console.log(rta1);

//cast o tambien puede ser asi
  myDynamicVar = 1212;
  const rta2 = (myDynamicVar as number).toFixed();
  console.log(rta2);


  })();
