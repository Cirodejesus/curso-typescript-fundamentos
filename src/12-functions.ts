(()=> {
  type Sizes = 's' | 'M' | 'L' | 'XL'; //Alias y Tipos Literales

  function createProductToJson(
      title: string,
      createdAt: Date,
      stock?: number,
      size?: Sizes
  ){
      /*Código de la función*/
      return {
        title,
        createdAt,
        stock,
        size
      }
  }

  const producto1 = createProductToJson('P1', new Date(),12,'L');
console.log(producto1);
console.log(producto1.title);
console.log(producto1.stock);
console.log(producto1.size);

  //Arrow fuction
  const createProductToJsonV2 =   (
    title: string,
    createdAt: Date,
    stock?: number,//opcional chaning ? se le indica que este dato es opcional.
    size?: Sizes //opcional chaning ? se le indica que este dato es opcional.
  ) => {
    /*Código de la función*/
    return {
      title,
      createdAt,
      stock,
      size
    }
}

const producto2 = createProductToJsonV2('P1', new Date(),12);
console.log(producto2);
console.log(producto2.title);
console.log(producto2.stock);
console.log(producto2.size);


})();
