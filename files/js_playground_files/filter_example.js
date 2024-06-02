function isEven(x){ 
	return x % 2==0; 
}

arr = new Array(1, 2, 3, 6, 5, 4); 

var new_arr = arr.filter(isEven); 
console.log(new_arr) 

// Definition:: It filters the elements of the array that return false for the applied condition and returns the array which contains elements that satisfy the applied condition.