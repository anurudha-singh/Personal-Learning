// // a callback function, the name of the function could be any name
// const callback = (n) => {
//     return n ** 2
//   }
//   // function that takes other function as a callback
//   function cube(callback, n) {
//     return callback(n) * n
//   }
//   console.log(cube(callback, 3))

// const numbers = [1, 2, 3, 4, 5]
// const sumArray = arr => {
//   let sum = 0
//   const callback = function(element) {
//     sum += element
//   }
//   arr.forEach(callback)
//   return sum

// }
// console.log(sumArray(numbers))

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//for each 

countries.forEach(element => console.log(element))
const reduceExample=numbers.reduce((element1,element2)=>{
return element1*element2
}
)
console.log(`reduce Example :: ${reduceExample}`);

// const filterExample=products.filter((element)=>
//      {element.product,element.price}
    
//     )
const validProducts = products.filter(item => typeof item.price === 'number' && item.price !== '');

console.log(validProducts);
    // console.log(`Filter Example :: ${filterExample}`);