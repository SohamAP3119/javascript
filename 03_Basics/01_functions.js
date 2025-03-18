function sayMyName(){
    // console.log("S");
    // console.log("O");
    // console.log("H");
    // console.log("A");
    // console.log("M");

} //define function

 sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
    
// }

function addTwoNumbers(number1, number2){
//    let result = number1 + number2
//    return result
return number1 + number2
    
}
const result = addTwoNumbers(3,4)
// console.log("Result: " + result);

function loginUserMessage(userName){
    if(userName === undefined){
        console.log("Please enter username");
        return                         
    }
    return `${userName} just logged in`
}
// console.log(loginUserMessage("soham"))
// console.log(loginUserMessage() )

//****************************** */
function loginUserMessage(userName){
    if(!userName){
        console.log("Please enter username");
        return                         
    }
    return `${userName} just logged in`
}
// console.log(loginUserMessage("soham"))
// console.log(loginUserMessage("soham"))

/************************SHOPING CART******************/
function calculateCartPrice(...value){
    return value
}           
// console.log(calculateCartPrice(200,100,300));

//#OBJECT
const user ={
    username : "Hitesh",
    price: 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username}and price is ${anyObject.price}`);
}

handleObject(user)


const NweArray = [200,400,100,5000]
function returnSecoundValue(getarray){
    return getarray[2]
}
console.log(returnSecoundValue(NweArray))
    