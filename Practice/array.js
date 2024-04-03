let a = [1,2,3,4]
for (let index = 0; index < a.length; index++) {
    if (index === 3) {
        console.log(`found ${index}`)
        break
    }
    const element = a[index];
    
}
let aree = ['aleem','subhan','zakir']
const myArr = [1,2,3]
x = [...aree,...myArr]
console.log(x)

const cars = ['toyota','honda','nissan','volvo'];
let qout = [5,25,9,35,3];
cars.push('bmw','kia')
cars.unshift('mazda','hondai')
//cars[5]='ford';
//cars.pop();
//cars.shift();
//const removedelement = cars.pop();
//const removedelement = cars.shift();
//const twoarray = cars.concat(qout)
//const twoarray = [...cars,...qout]
const position = cars.indexOf('volvo')
console.log(position)