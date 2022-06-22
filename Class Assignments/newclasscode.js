//Problem 1
function classTable(num,times){
    for(let i=1;i<=times;i++){
        console.log(`${num} times ${i} is:`,num*i);
    }
}

//classTable(12,8)

//Problem 2
function findSquare(n){
    for(let i=1;i<=n;i++){
        console.log(`Square of ${i} is:`,i*i);
    }
}

//findSquare(7)

//Problem 3
function canBeDivided(n){
    return n%2==0?'Yes':'No'
}

// console.log(canBeDivided(8));
// console.log(canBeDivided(7));

//Problem 4
function canFormTriangle(a,b,c){
    if(a+b>c && b+c>a && c+a>b)
        return true
    return false
}

// console.log(canFormTriangle(1,2,3))
// console.log(canFormTriangle(4,3,5));

//Problem 5
function calcPower(x,y){    //assuming y>=0
    if(y==0) return 1
    else{
        let ans=1;
        for(let i=1;i<=y;i++){
            ans = ans*x;
        }
        return ans;
    }
}

// console.log(calcPower(3,4))
// console.log(calcPower(-2,5));

//Problem 6
function binomialCoefficient(n,k){
    let prev = []
    prev.length=k+1
    prev[0]=prev[1]=1
    for(let i=2;i<=k;i++) prev[i]=0
    //console.log(prev);
    let cur = undefined
    for(let i=2;i<=n;i++){
        cur = []
        cur.length=k+1
        cur[0]=1;
        for(let j=1;j<=k;j++){
            cur[j] = prev[j-1]+prev[j];
        }
        //console.log(cur);
        prev = cur
    }
    return cur[k]
}

// console.log(binomialCoefficient(6,5))

//Problem 7
function factorial(n){
    if(n==0) return 1
    let ans=1
    for(let i=n;i>=2;i--){
        ans = ans*i
    }
    return ans
}

// console.log(factorial(5));
// console.log(factorial(7));

//Problem 8
function countTrailingZeroes(n){
    let ans=0
    let i=5
    while(Math.floor(n/i)>=1){
        ans+=Math.floor(n/i);
        i*=5
    }
    return ans
}

// console.log(countTrailingZeroes(20));

//Arithmetic progression
function getNth(a,d,n){
    return a+(n-1)*d;
}

//Palindromic
function isPalindrome(n){
    let copy = n
    let rev = String(n).split("").reverse().join("")
    //console.log(rev);
    return rev == n
}

// console.log(isPalindrome(4554))


//make a function --
/*
no should be even
no should be palindrome
no should be div by 4

if all condns met return 'Great!' else 'try again'
*/

function checkCondition(n){
    if(n%4==0 && isPalindrome(n))
        return 'Great!'
    else
        return 'Try again'
}

let i1 = 6556,i2=4114
console.log(i1,checkCondition(6556));
console.log(i2,checkCondition(4114));