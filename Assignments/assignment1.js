//PS: Create a basic calculator

//importing module, install by doing npm install readline-sync
const readline = require('readline-sync')

function addNums(num1,num2){
    return num1+num2
}

function subtractNums(num1,num2){
    return num1-num2
}

function multiplyNums(num1,num2){
    return num1*num2
}

function divideNums(num1,num2){
    return num2===0?'Denominator cant be 0':num1/num2
}

function calculator(num1,num2,op){
    switch(op){
        case '+':
            return addNums(num1,num2)
        case '-':
            return subtractNums(num1,num2)    
        case '*':
            return multiplyNums(num1,num2)
        case '/':
            return divideNums(num1,num2)
        default:
            console.log('Unrecognized operator')
            //will return an undefined object
            break
    }
}

//TODO: assert type of input
try{
    let num1 = Number(readline.question('Enter first number: '))
    if(typeof(num1)!=='number')
        throw "input type mismatch"
    let num2 = Number(readline.question('Enter second number: '))
    if(typeof(num2)!=='number')
        throw "input type mismatch"
    let op = String(readline.question('Enter what operation you would like to perform: '))
    let ans = calculator(num1,num2,op)
    console.log(ans)
}
catch(e){
    console.log('Input numbers please')
}