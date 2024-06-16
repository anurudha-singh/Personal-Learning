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

// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
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

// countries.forEach(element => console.log(element))
// const reduceExample=numbers.reduce((element1,element2)=>{
// return element1*element2
// }
// )
// console.log(`reduce Example :: ${reduceExample}`);

// const filterExample=products.filter((element)=>
//      {element.product,element.price}
    
//     )
const validProducts = products.filter(item => typeof item.price === 'number' && item.price !== '');

// console.log(validProducts);
    // console.log(`Filter Example :: ${filterExample}`);

    const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

    // for (const element of countries) {
    // console.log(element)
    // }
    //Callback
// const doSomething = () => {
//   setTimeout(() => {
//     const skills = ['HTML', 'CSS', 'JS']
//     callback('It did not go well', skills)
//   }, 2000)
// }

// const callback = (err, result) => {
//   if (err) {
//     return console.log(err)
//   }
//   return console.log(result)
// }

// doSomething()
//Network API call using promises
const url = 'https://restcountries.com/v2/all'
fetch(url)
  .then(response => response.json())
  .then(data => {
    // console.log(data)
  })
  .catch(error => console.error(error))

//Network API call using async and await

const fetchData = async () => {
  try {
    const response = await fetch(url)
    const countries = await response.json()
    // console.log(countries)
  } catch (err) {
    console.error(err)
  }
}
// console.log('===== async and await')
// fetchData()

function outerFunction(){
  let count=0
  function innerFunction(){
    count++
    return count
  }
  return innerFunction
}
// const innerFunction=outerFunction()
// console.log(outerFunction().count)
// console.log(innerFunction())
// console.log(innerFunction())

function outerFunction() {
  let count = 0;
  function plusOne() {
      count++
      return count
  }
  function minusOne() {
      count--
      return count
  }

  return {
      plusOne:plusOne(),
      minusOne:minusOne()
  }
}
const innerFuncs = outerFunction()

console.log(innerFuncs.plusOne)
console.log(innerFuncs.minusOne)