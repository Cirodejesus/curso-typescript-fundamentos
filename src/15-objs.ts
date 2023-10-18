//Objeto como tipos
// Object as types
//Function autoejecutable
(() => {
type Sizes = 'S' | 'M' | 'L' | 'XL';
type Products = { //Representación de type
  title: string,
    createdAt: Date,
    stock?: number,
    size?: Sizes
};
//Array de objeto type Products
const products: Products[] = [];

const addProduct = (data: Products) => {
products.push(data)
}

addProduct({
  title: 'Pro1',
  createdAt: new Date(1991, 1, 1),
  stock: 12,

});
addProduct({
  title: 'Pro2',
  createdAt: new Date(1993, 1, 1),
  stock: 12,
 size: 'XL'
});

products.push({
  title: 'Prod3',
  createdAt: new Date(1992, 1, 1),
  stock: 121,
  size: 'S'

});
console.log(products);
})()
