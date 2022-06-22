//PS: Check if number entered is odd or even

const readline = require('readline-sync')

//TODO: Make it so that only whole numbers taken 
try{
    let num = Number(readline.question('Enter integer number: '))
    if(typeof(num)!=='number')
        throw "input type mismatch"
    else{
        console.log(num%2);
        if(num%2==0)
            console.log('Even number')
        else
            console.log('Odd number')
    }
} catch(e){
    console.log('Buddy we need a **number**');
}