//imediately invoked function expressions(IIFE)
(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
    
})();

( (name) => {
    console.log(`DB CONNECT ${name}`);
    
})('Soham')
// chai()