//PS: Find all palindromes under 50

//all single digit numbers and multiple of 11
//for general number, log(N) for finding rev of no and comparing to original,
//and O(n) for linearly checking
//general solution O(nlogn)
function palUnder50(){
    for(let i=1;i<50;i++){
        if(i<10 || i%11===0){
            process.stdout.write(i+" ")
        }
    }
    console.log();
}

palUnder50()