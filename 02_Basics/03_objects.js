
const mySym = Symbol("key1") // declaration of symbal
const JSUser = {
    name :"Soham",
    "full name" : "Soham Patil",
    age : 21,
    [mySym] :  "myKey1", //how to define sysmbal in  object
    location : "Kolhapur",
    email : "soham@google.com",
    isLoggedin : false,
    lastLoginDays :["Monday","Saturdsy"]

}
// console.log(JSUser.lastLoginDays);
// console.log(JSUser["email"]);
// console.log(JSUser["full name"]);

JSUser.email = "soham@google.com"
// Object.freeze(JSUser)
JSUser.email ="sohamap7000@gmail.com"
// console.log(JSUser)

JSUser.greeating = function(){
    console.log("hello Js user");
    
}
JSUser.greeatingTwo = function(){
    console.log(`hello Js user,${this.name}`);
    
}
console.log(JSUser.greeating());
console.log(JSUser.greeatingTwo());
