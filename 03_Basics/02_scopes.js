let a = 10
const b = 20
var c = 30

if(true){
    let a = 10
    const b = 20
    // console.log("INNER :", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

function one (){
    const username = "Soham"

    function two(){
        const website ="Youtube"
       console.log(username);// child fun have authority to access parent fun
        
    }
    // console.log(website);// here run website bt it is outof scope , it will show error
    two()
    
}

one()

if(true){
    const username = "soham "
    if(username === "soham "){
        const website = "Youtube"
        console.log(username + website);
    }
    // console.log(website);
    
}
// console.log(username);


