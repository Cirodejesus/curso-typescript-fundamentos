//Modulos Import y export
//Palabra clave export
export type Sizes = 'S' | 'M' | 'L' | 'XL';
 export type Product = { //Representación de type
  name: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
};

