(() =>{
  const login = (data:{email: string, password: number }) => {
console.log(data.email, data.password);

  }

  // login('nico@nico.co', '123344')
  login({
    email: 'nico@nico.co',
    password: 123344
  });
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  //Arrays de product
  const products: any[] = [];

  const addProduct = (data: {
    title: string,
      createdAt: Date,
      stock?: number,
      size?: Sizes,

  }) => {
     products.push(data);
  }

  addProduct({
    title: 'Prop1',
    createdAt: new Date(1993, 1, 1),
    stock: 12,
  });
  addProduct({
    title: 'Prop1',
    createdAt: new Date(1993, 1, 1),
    stock: 12,
    size: 'M'
  });

  console.log(products);

  })();

