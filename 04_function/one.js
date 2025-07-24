// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
    
// }
// addTwoNumber(3,null)

// const result = addTwoNumber(3,5)

// console.log("result " , result);

function addThree(num1, num2 , num3){
    return num1 + num2 + num3

}

addThree(4,5,6)

// function loginUserMessage(username){
//     if(username == undefined){
//         console.log("PLs enter a user");
//         return
//     }
//     return `${username} just logged in`
// }

// can also add default
function loginUserMessage(username  = "gunu"){
    if(username == undefined){
        console.log("PLs enter a user");
        return
    }
    return `${username} just logged in`
}
const res = loginUserMessage("jia")
console.log(res);
console.log(loginUserMessage());

// rest 
function calculateCartPrice(...num){
    return num;
}
console.log(calculateCartPrice(200,400,500));

// pass object as a parameter
const user = {
    username : "jia",
    price : 88
}
function handleObject(any){
    console.log(`Username is ${any.username} and price is ${any.price}`);
    
}

handleObject(user)
handleObject({
    username : "lolo",
    price : 43
})

const newArr = [434,67,32,68,234,12]

// pass array a  parameter
function second(arr){
    return arr[2]
}
console.log(second(newArr));








