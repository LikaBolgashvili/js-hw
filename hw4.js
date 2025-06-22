// 1.მოცემულია მასივი:
// let array2 = [14, 150, 'css', null, 'javascript', 25];

// შექმენით ახალი მასივი map ფუნქციის საშუალებით შემდეგი ლოგიკით: თუ ელემენტი არის რიცხვი, ამ მასივში უნდა იყოს ამ რიცხვის კვადრატი. თუ ელემენტი არის სტირნგი, მაშინ ახალ მასივში უნდა  იყოს ეს ტექსტი დიდი ასოებით. სხვა შემთხვევაში ელემენტი უნდა დაემატოს უცვლელად.

let array = [14, 150, 'css', null, 'javascript', 25]

let NewArray = array.map(item => {
  if (typeof item === 'number') {
    return item ** 2;
  } else if (typeof item === 'string') {
    return item.toUpperCase()
  } else {
    return item;
  }
})

console.log(NewArray);
// 2.prompt ფუნქციის საშუალებით კითხეთ მომხმარებელს შემდეგი კითხვა: საქართველოს დედაქალაქი? სწორი პასუხი ჩაწერეთ პატარა ასობიეთ 
// // და  შეინახეთ ცვლადში. როდესაც მიიღებთ პასუხს მომხმარებლისგან, გადაიყვანეთ ეს პასუხი პატარა ასოებად და შეადარეთ სწორ პასუხს. თუ // მომხმარებლის პასუხი სწორია, დაბეჭდეთ სწორია, თუ არა მაშინ დაბეჭდეთ არასწორია

let correctAnswer = 'თბილისი'; 
let userAnswer = prompt("რომელია საქართველოს დედაქალაქი?");

if (userAnswer.toLowerCase() === correctAnswer) {
  console.log("სწორია");
} else {
  console.log("არასწორია");
}

// 3. მოცემულია მასივი, შემდეგი მნიშვნელობებით - let array1 =[“hello1”, 14,24, “hello2”] გამოიტანეთ მარტო ციფრები მეთოდის საშუალებით;
let array1 = ["hello1", 14, 24, "hello2"];
let numbersOnly = array1.filter(item => typeof item === 'number');

console.log(numbersOnly);

// 4. მოცემულია მასივი:
// let languages = ['html', 'css', 'javascript', ‘python’, 'php'];
// ფილტრის საშულებით გაფილტრეთ და გამოიტანეთ მარტო ის სიტყვა რომლის სიმბოლოების რაოდენობა იქნება 3-ზე მეტი;
let languages = ['html', 'css', 'javascript','python', 'php'];
let longtxt = languages.filter(item => item.length > 3);

console.log(longtxt);

// 5. მოცემულია მასივი:
// let words = ['Madrid', 'rome', 'Milan', 'berlin'];
// filter მეთოდის საშუალებით დააბრუნეთ მასივი, რომელიც შედგება ისეთი სიტყვებისგან რომელიც შეიცავს ასო m-ს ან M-ს;

let words = ['Madrid', 'rome', 'Milan', 'berlin'];
let includesM = words.filter(word => word.toLowerCase().includes('m'));

console.log(includesM);

// 6. მოცემულია: let link = “https://google.com”. დაწერეთ ფუნქცია, რომელიც პარამეტრად იღებს ამ ცვლადს, და შეამოწმეთ მეთოდის საშუალებით არის თუ არა ამ ცვლადში “https://“. თუ კი გამოიტანეთ - კი მოიცავს, თუ არა - არა, არ მოიცავს

let link = "https://google.com";

function checkLink(url) {
  if (url.includes("https://")) {
    console.log("კი, მოიცავს");
  } else {
    console.log("არა, არ მოიცავს");
  }
}

checkLink(link);


// 7.მოცემულია მასივი:
// let array7 = [5,4,3,2,1];
// მეთოდის საშუალებით მიიღეთ ახალი მასივი, რომელშიც array3-ის მასივიდან თითოეული რიცხვი იქნება თავის თავზე გამრავლებული;
let array7 = [5, 4, 3, 2, 1];
let newArray7 = array7.map(num => num * num);

console.log(newArray7);


// 8. მოცემულია სტრინგი - ‘12345’, გაიგეთ ამ რიცხვებსის ჯამი. ( უნდა გადაიყავნოთ მასივში, გამოთვალეთ ჯამი, და შემდგ თითოეული სტრინგი გადაიყავნოთ რიცხვში)

let txt = '12345'
let sum = txt
  .split('')
  .map(char => Number(char))
  .reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(sum);


// 9.Გამოთვალეთ ნებისმიერი რიცხვებს ჯამი reduce მეთოდით

let numbers = [10, 20, 30, 40];
let sum1 = numbers.reduce((accumulator, currentValue) => accumulator + currentValue)

console.log(sum1);
// 10. Გაერთიანეთ სამი მასივის მნიშვენლობები let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr3 = [5, 6];
//  Ერთ მასივში

let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

let joinedArrays = arr1.concat(arr2, arr3);

console.log(joinedArrays);


// 11. მოცემულია მასივი, რომელშიც არის ერთზე მეტი მნიშვნელობა, მაგრამ კონკრეტულად რამდენი არ ვიცით, შეიძლება 100 ან 200 ან 10. მაგ: arr  splice მეთოდის საშუალებით წაშალეთ ბოლოს წინა მნიშვნელობა და მაგის მაგივრად ჩასვით “strawberry”. 
let arr = [10, 20, 30, 40, 50]; // მაგალითი
arr.splice(arr.length - 2, 1, "strawberry");

console.log(arr);

// 12. მოცემულია სტრინგი: let info= ‘good day”, ამოიღეთ სიტყვა day და ჩასვით ახალ ცვლადში slice მეთოდის საშუალებით.

let info = 'good day';
let newWord = info.slice(5);
console.log(newWord);

// 13. დაწერეთ ფუნქცია, რომელიც პარამეტრად იღებს სტრინგს, და დააბრუნებს ჩაწერილი სტრინგის სიგრძეს.
function getLength(txt) {
  return txt.length;
}

console.log(getLength("გამარჯობა")); 

// 14. შექმენით მასივი, რომლის საწყისი მნიშვნელობა იქნება რიცხვები: 5, 25, 89, 120, 36;

//   მასივის ბოლოში დაამატეთ ორი ელემენტი(სტრინგი): javascript და python;
//   მასივის დასაწყისში კი დაამატეთ ელემენტი(სტრინგი): html და css;
//   გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
//   წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
let myArray = [5, 25, 89, 120, 36];

myArray.push("javascript", "python");     
myArray.unshift("html", "css");         
console.log(myArray.length);            
myArray.shift(); 
myArray.pop(); 

console.log(myArray);

// 15. შექმენით მასივი, შემდეგი ელემენტებით:ფორთოხალი,ბანანი,კივი;

//   გამოიტანეთ ინფორმაცია ეკრანზე თუ რამდენი ელემენტი გაქვთ მასივში;
//   მასივის ბოლოს დაამატეთ ორი ელემენტი: ვაშლი და ანანასი;
//   მასივის დასაწყისში კი დაამატეთ ელემენტი: საზამთრო; 
//   გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
//   მასივის მე-3 ადგილას დაამატეთ ელემენტი: მანგო;
//   წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
//   გამოიტანეთ ეკრანზე, თუ რამდენი ელემენტი დარჩა მასივში;

let fruits = ["ფორთოხალი", "ბანანი", "კივი"];
console.log(fruits.length); 

fruits.push("ვაშლი", "ანანასი");
fruits.unshift("საზამთრო");
console.log(fruits.length); 

fruits.splice(3, 0, "მანგო"); 
fruits.shift();  
fruits.pop();   

console.log(fruits.length); 
console.log(fruits);


// 16. მოცემულია მასივი let array16 =[1, 2, 3, 4, 5]. splice მეთოდის საშუალებით მიიღეთ: [1, 2, 3, 'a', 'b', 'c', 4, 5].	

let array16 = [1, 2, 3, 4, 5];
array16.splice(3, 0, 'a', 'b', 'c'); 

console.log(array16); 


// 17. მოცემულია მასივი: let array17 =  [15, 100, 25, 10, 36]
//  წაშალეთ ამ მასივიდან რიცხვი 10;
let array17 = [15, 100, 25, 10, 36];

array17 = array17.filter(num => num !== 10);
console.log(array17);


// 18. მოცემულია მასივი:   let array18 = [ 1, 2 , 3 , 4, 5] 
// Splice მეთოდის საშალებით 3-ის მაგივრად ჩასვით სიტყვა three;
let array18 = [1, 2, 3, 4, 5];

let index = array18.indexOf(3);
if (index !== -1) {
  array18.splice(index, 1, "three");
}

console.log(array18); 


// 19. მოცემულია მასიცი:
// let array19 = [14, 150, 'css', null, 'javascript', 25];
// შექმენით ახალი მასივი map ფუნქციის საშუალებით შემდეგი ლოგიკით: თუ ელემენტი არის რიცხვი, ამ მასივში უნდა იყოს ამ რიცხვის კვადრატი. თუ ელემენტი არის სტირნგი, მაშინ ახალ მასივში უნდა იყოს ეს ტექსტი დიდი ასოებით. სხვა შემთხვევაში ელემენტი უნდა დაემატოს უცვლელად.

let array19 = [14, 150, 'css', null, 'javascript', 25];
let New = array19.map(item => {
  if (typeof item === 'number') return item ** 2;
  if (typeof item === 'string') return item.toUpperCase();
  return item;
});

console.log(New);


// 20. მოცემულია მასივი:
// let  array20 = [12, 25, 3, 6, 8, 14, 7, 23];
// map-ის გამოყენებით შექმენით ახალი მასივი, რომელშიც array20 მასივიდან თითოეული ელემენტი იქნება 3-ზე გაყოფილი;
let array20 = [12, 25, 3, 6, 8, 14, 7, 23];
let dividedNums = array20.map(num => num / 3);

console.log(dividedNums);


// 21. მოცემულია მასივი: let array21 =['apple', 'orange', 'mango', 'kiwi']. მეთოდის საშუალებით მიიღეთ: [

// 'apple', 'orange', 'strawberry', 'avocado','mango','kiwi'  ].   

let array21 = ['apple', 'orange', 'mango', 'kiwi'];
array21.splice(2, 0, 'strawberry', 'avocado');

console.log(array21);


// 22. .მოცემულია მასივი:let numbers = [12, 56, 18, 35, 10]; 

// მეთოდის საშუალებით ამოიღეთ მხოლოდ ლუწი რიცხვები; 
let nums = [12, 56, 18, 35, 10];
let evenNumbers = nums.filter(num => num % 2 === 0);

console.log(evenNumbers);


// 23. მოცემულია მასივი:
// let array23 = [1,2,3,4,5];
// reduce მეთოდის საშუალებით მიიღეთ რიცხვების გამრავლების შედეგი (1 * 2 * 3 * 4 * 5);
let array23 = [1, 2, 3, 4, 5];
let  Multiplied = array23.reduce((acc, curr) => acc * curr);

console.log(Multiplied);


// 24. მოცემულია მასივი: 
// let array24 =  [15, 100, 25, 10, 36]
//  წაშალეთ ამ მასივიდან რიცხვი 10;

let array24 = [15, 100, 25, 10, 36];
let Index = array24.indexOf(10);

if (Index !== -1) {
  array24.splice(Index, 1);
}

console.log(array24);
