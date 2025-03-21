const user ={
    username : "Soham",
    price: 9999,

    welcomeMessage : function(){
        // console.log(`${this.username},Welcome to website`);
        // console.log(this);
        
    }
}

user.welcomeMessage()
user.username ="Samm"
user.welcomeMessage()

// console.log(this);

//     function chai(){
//     let username = "Soham"
//     console.log(this.username);
    
// }

// chai()

const chai = () => {
    let username = "soham"
    console.log(this);
    
}
//chai()

//*----------------------ARROW FUN---------

// const addTwo = (num1, num2) => {
//     return num1 + num2 //explicite return
// }

// const addTwo = (num1, num2) => num1 + num2 //implicite return

const addTwo = (num1, num2) =>(num1 + num2) //implicite return

    console.log(addTwo(3,4));
    
