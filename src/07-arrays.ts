//Fuction de ambito auto-ejecutada
//Inferido y explicito
(()=>{
  let prices = [1,2,2,1,1,212, 'Hola', true,  ];
 // prices.push('asas'); //>No
 //  prices.push(true);//>No
 //  prices.push({}); //>No
   prices.push(121212);//>Si


  console.log(prices);


  let products: (number | string | boolean)[] = [ 'hola', true];
  products.push(false);
  products.push(123465)
  console.log(products);


  let mixed: (number | string | boolean | object )[] = ['hola', true];
  mixed.push(12);
  mixed.push('as');
  mixed.push(true);
  mixed.push({});
  mixed.push([]);

  console.log(mixed);


  let numbers = [1,2];
  numbers.reduce(item => item * 9);
  console.log(numbers);

  })();
