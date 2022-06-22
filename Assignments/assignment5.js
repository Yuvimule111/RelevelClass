//PS: Given a number A, find a & b such that a,b>=0,b<=a & a^2+b^2=a
import { question } from 'readline-sync'    //have to include "type":"module" in package.json
//const readline = require('readline-sync')
function getTwoNumbers(A){
    if(A<0)
        return 'Not possible'
    for(let a=0;a<=Math.sqrt(A);a++){
        for(let b=0;b<=a;b++){
            if(a*a + b*b === A){
                //console.log(a,b)
                return [a,b]
            }
        }
    }
    return 'Not possible'
}
let param = Number(question('Enter A: '))
//console.log(typeof(param));
let ans = getTwoNumbers(param)
if(typeof(ans)==='string')
    console.log(ans)
else{
    let a = ans[0]
    let b = ans[1]
    console.log('a:',a,'b:',b);
}