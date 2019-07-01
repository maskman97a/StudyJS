var fibonacci = [ 1, 1 ];
var i = 2;
var found = false;
while(!found) {
	let newFibonacci = fibonacci[i-1] + fibonacci[i-2];
	console.log(fibonacci[i-1]);
	if(String(newFibonacci).length > 1000) {
		console.log("Index of the first term in the Fibonacci sequence to contain 1000 digits is "+i+" ("+newFibonacci+")");
		found = true;
	} else {
		fibonacci.push(newFibonacci);
		i += 1;
	}
}


// f[n-2] + f[n-1]