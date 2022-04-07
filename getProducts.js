const products = require('./products.json');

exports.getProducts = () => products;
console.log("Продукт\t\t\t\t| Цена");

products.forEach(element => {
    console.log(
        `${element.product}\t\t|${element.prices}`
      );
});

// for(let counter = 0; counter < products.length; counter++){
//     console.log(products[counter].product, products[counter].prices);
// }
