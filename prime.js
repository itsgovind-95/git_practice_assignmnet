let num = 7;
let count = 0;

for(let i = 2; i<=num; i++){
    if(num % i ==0){
        count++;
    }
}

if (count == 0) {
    console.log(num," is Prime");
}
console.log(num,"is not Prime");