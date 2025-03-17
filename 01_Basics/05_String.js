const name = "soham"
const repoCount = 50
//console.log(name + repoCount + "Value")

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String("Soham-SP-ccom");
console.log(gameName)

console.log(gameName.length)
console.log(gameName.charAt(3))
console.log(gameName.indexOf('a'))

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-7 , 3)
console.log(anotherString)    

const newStringOne = "   SPM    "
console.log(newStringOne);
console.log(newStringOne.trim())       

const url = "https://sohampatil.com/Soham%20Patil"
console.log(url.replace('%20', '-'))
console.log(url.includes('Soham'))

console.log(gameName.split('-'))                                             