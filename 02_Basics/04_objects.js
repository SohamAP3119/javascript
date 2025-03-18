const tinderUser = new Object() //singleton object
const tinderUser1 = {
                                //literal object
}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = true
// console.log(tinderUser);

const regularUser ={
    email : "some@gmail.com",
    fullname : {
        usefullname : {
            firstname: "Soham",
            lastname: "Patil"
        }
    }
}
// console.log(regularUser.fullname.usefullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

//const obj4 ={ obj1,obj2,obj3}
// const obj4 = Object.assign({}, obj1,obj2,obj3)
const obj4 ={...obj1, ...obj2, ...obj3}
console.log(obj4);

console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn')) 

//**********************JSON API
// {
//     "name" : "Soham",
//     "coursename" : "code with chai"
// }
[
    {},
    {},
    {}
]