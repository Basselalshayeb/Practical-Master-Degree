const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
/**
 * 
 * 
 * We need a program that takes input and provide output
 * Input: max:int
 * Output: array
 * 
 * 
 */

function generatePrimes(maxNumber) {
    const primes = [];
    const i = 2; // first prime
    const vis = new Array(maxNumber+1).fill(true);

    for(let i = 2; i * i <= maxNumber; i++) {
        if (vis[i]) {
            for (let j = i*i; j <= maxNumber; j += i) {
                vis[j] = false;
            }
        }
    }

    for(let i = 2; i< maxNumber; i++) {
        if (vis[i]){
            primes.push(i)
        }
    }
    return primes;
}

// 1- take input
rl.question('what is your maximum number?\n', number => {
    const float = parseInt(number);
    // 2- generate the primes
    const primes = generatePrimes(float);
    // 3- print the primes
    console.log(primes)
})

