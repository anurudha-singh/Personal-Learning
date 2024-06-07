// Generate Function generates three 
// different numbers in three calls 
// function* fun() { 
// 	yield 10; 
// 	yield 20; 
// 	yield 30; 
// } 

// Calling the Generate Function 
// let gen = fun(); 
// console.log(gen.next().value); 
// console.log(gen.next().value); 
// console.log(gen.next().value);
// console.log(gen.next().done); //true
// console.log(gen.next().value); //undefined
// Generate Function generates an 
// infinite series of Natural Numbers 
function* nextNatural() { 
	let naturalNumber = 1; 

	// Infinite Generation 
	while (true) { 
        // console.log('yield')
		yield naturalNumber++; 
	} 
} 
//generator function resume its execution from they left off last time
// Calling the Generate Function 
let gen = nextNatural(); 

// Loop to print the first 
// 10 Generated number 
for (let i = 0; i < 10; i++) { 
    // console.log('loop')
	// Generating Next Number 
	console.log(gen.next().value); 
}
