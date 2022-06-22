function astroguru(noChildren,spousename,loc,job){
    console.log(`You will be a ${job} in ${loc} and married to ${spousename} with ${noChildren} children`);
}

astroguru(3,'abc','london','software engineer')

function compareTwo(num1,num2){
    if(typeof(num1)!=='number'||typeof(num2)!=='number'){
        console.log('can\'t be compared')
    } else{
        if(a!==b){
            return a>b?a:b;
        } else{
            console.log('Equal numbers');
        }
    }
}

let bigger = compareTwo('bcd',45);
if(typeof(bigger)!='undefined')
    console.log(compareTwo('abc',45))