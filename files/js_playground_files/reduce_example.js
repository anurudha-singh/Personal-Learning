// function product(accu, current) { 
// console.log(`acc value is ${accu} and acc* current is ${accu*current}`);
//     return accu * current; 
// } 
arr = new Array(1, 2, 3, 6, 5, 4); 

var product_of_arr = arr.reduce((accu,current)=>{
return accu*current;
},1); 
console.log(product_of_arr); // Output: 720

// Definition:: It reduces all the elements of the array to a single value by repeatedly applying a function. 