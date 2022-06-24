//Class and function to calc number of objects created -- understanding = 45 to 50%
class FunctionApp{
    constructor(){
        // Count the number of the objects created
        i++;
    }
    // Function 1
    get(){
        return i; //return number of objects
    }
    // Function 2
    method1(){
        console.log("Function method1");
  
        // Calling method2()
        this.method2();

        return 1;
    }
  
    // Function 3
    method2() {
        console.log("Function method2");
    }
}
  
// Create object of FunctionApp class inside the class
const obj = new FunctionApp();

// Calling function 2
var i = obj.method1();  //here var is used to make i in global scope

// Display message only
console.log("Control returned after function method1 :" + i);

// Calling function 3
//let no_of_objects = obj.get();

// console.log("No of objects created till now : " + no_of_objects);

const obj2 = new FunctionApp();
console.log(obj2.get());

//----------------------------------------------------------------------------------------------
//sum of inner digits
function sumInnerDigits(n){
    let copy = n
    copy=Math.floor(copy/10)
    let ans=0
    while(copy>10){
        ans+=copy%10
        copy=Math.floor(copy/10)
    }
    return ans==0?-1:ans
}

// console.log(2124,sumInnerDigits(2124));
// console.log(70,sumInnerDigits(70));
//----------------------------------------------------------------------------------------------
//calculate power using no built-in functions
function calcPower(x,y){    //assuming y>=0
    if(x==0) return 0
    if(y==0) return 1
    let ans=1;
    if(y>0){
        for(let i=1;i<=y;i++){
            ans = ans*x;
        }
        return ans;
    } else{
        x=1/x
        y=-y
        for(let i=1;i<=y;i++){
            ans = ans*x;
        }
        return ans;
    }
}

// console.log(calcPower(3,-4))
// console.log(calcPower(-2,5));
//----------------------------------------------------------------------------------------------
//permutation of number has 60 as factor
function hasFactor60(n){
    let copy=Number(n)
    let ans=0
    while(copy>0){
        ans+=copy%10
        copy = Math.floor(copy/10)
    }
    if(ans%3!=0||ans==0)    //checking for divisibility by 3
        return 0
    else{
        nArray = n.split("")
        let strAns = []
        strAns.length = nArray.length
        let pos = strAns.length-1
        if(n.lastIndexOf('0')==-1)    //checking for divisibility by 10, therefore for 5
            return 0
        else{   //checking for divisibility by 4
            let flag=false
            strAns[pos--]='0'
            nArray[n.lastIndexOf('0')]=-1
            if(n.indexOf('2')!=-1){
                strAns[pos--]='2'
                nArray[n.indexOf('2')]=-1
                flag=true
            } else if(n.indexOf('4')!=-1){
                strAns[pos--]='4'
                nArray[n.indexOf('4')]=-1
                flag=true
            } else if(n.indexOf('6')!=-1){
                strAns[pos--]='6'
                nArray[n.indexOf('6')]=-1
                flag=true
            } else if(n.indexOf('8')!=-1){
                strAns[pos--]='8'
                nArray[n.indexOf('8')]=-1
                flag=true
            } else if(n.indexOf('0')!=n.lastIndexOf('0')){
                strAns[pos--]='0'
                nArray[n.indexOf('0')]=-1
                flag=true
            }
            else{
                return 0
            }

            if(flag){ 
                let i=0
                while(i<nArray.length && pos>=0){
                    if(nArray[i]==-1) i++;
                    else{
                        strAns[pos--]=nArray[i++]
                    }
                }
                console.log('Current strAns array:',strAns);
                if(strAns[0]=='0'){
                    i=1;
                    while(i<strAns.length){
                        if(strAns[i]!='0'){
                            let temp = strAns[i]
                            strAns[i]=strAns[0]
                            strAns[0]=temp
                            break
                        } else{
                            i++
                        } 
                    }
                }
                strAns = strAns.join("")
                console.log('Permutation is:',strAns);
                return 1
            }
        }
    }
}

console.log('2340',hasFactor60('2340'));