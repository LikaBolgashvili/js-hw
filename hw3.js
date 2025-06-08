//1ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი: არგუმენტად გადაეცით ეს მასივი:
let array = [10, 50, 6, 7, 8, 11, 6, 3, 9];


function sum(array) {
    let result = 0;
    for (let index = 0; index < array.length; index++) {
        result += array[index];
    }
    return result;
}

console.log(sum(array));

//2.ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 'giorgi saakadze') თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false

let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    // isloggedin: false
    isloggedin: true
}

function getuser(user) {
    if (user.isloggedin === true) {
        return user.firstname + ' ' + user.lastname;
    } else {
        return false;
    }
}

console.log(getuser(user));


// 3.შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:

let array1 = [10, 50, 6, 7, 68, 11, 6, 3, 9];

//ვარიანტი 1
function findmax(array1) {
    let maximum = 0;
    for (let index = 0; index < array1.length; index++) {
        if (array1[index] > maximum) {
            maximum = array1[index]
        }
        
    }
    return maximum
}

console.log(findmax(array1))

//ვარიანტი 2
function getmaximum(array1) {
    return Math.max(...array1)
}

console.log(getmaximum(array1))


// 4.დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიიღებს ერთ რიცხვს და გამოთვლის გადაცემული მნიშვნელობა კენტია თუ ლუწი; თუ ლუწია დააბრუნოს - this number is even‘; თუ კენტია დააბრუნოს - this number is odd‘;

function OddorEven(num) {
    if (num % 2 === 0){
        return 'This number is even'
    } else {
        return 'This number is odd'
    }
}

console.log(OddorEven(1010))

//inputit ricxvis shekvana
let userinput = prompt("enter a number: ")
let num = Number(userinput)

console.log(OddorEven(num))