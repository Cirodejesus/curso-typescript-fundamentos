import { Product } from "./product.model";
//Programación Modular
//Array de objeto type Products
export const products: Product[] = [];

//Agregar un producto
export const addProduct = (data: Product) => {
products.push(data)
}
// Retorno de un number
//Calcular el stock de los producto que hay en el array
export const calcStock = (): number => {
 let total = 0;
 products.forEach((item) => {
  total += item.stock;
 });

 return total;
}
