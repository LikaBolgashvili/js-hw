//1.ციკლის საშუალებით გამოიტანეთ რიცხვები 5დან - 100მდე 
for (let index = 5; index < 100; index++) {
    console.log(index);
}

//მოცემულია მასივი:let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12]; ციკლის საშუალებით გამოიტანეთ მხოლოდ ის რიცხვები რომლებიც მეტია 0 ზე და ნაკლებია 10ზე
let array= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12]

for (let index = 0; index < array.length; index++) {
    if (array[index]>0 && array[index]<10) {
        console.log(array[index])
    }   
}

//3.მოცემულია მასივი: 
// let array2= [1, 2, 3, 4, 5] ციკლის საშუალებით გამოთვალეთ რიცხვების ჯამი
let array2= [1, 2, 3, 4, 5];
let sum = 0;

for (let index = 0; index < array2.length; index++) {
    sum += array2[index];
}

console.log(sum);

// 4.მოცემულია მასივი 
// let array3= [1, 2, 3, 4, 5];
// ციკლის საშუალებით გამოთვალეთ საშუალო არითმტიკული (ჯამი გავყოთ ელემნტების რაოდენობაზე)
let array3= [1, 2, 3, 4, 5];
let sum2 = 0

for (let index = 0; index < array3.length; index++) {
    sum2 += array3[index];
}

let avg = sum2 / array3.length;

console.log(avg);

// 5.მოცემული ობიექტიდან ამოიღეთ user ცვლადის სტუდენტის სტატუსი;
let user = {
  firstname: "giorgi",
  lastname: "smith",
  age: 25,  
  studentstatus: "active"
};

console.log(user.studentstatus)

// 6.დაწერეთ შემდეგი პირობები:
// თუ უსერის ასაკი ნაკლებია 18ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი:  hello user;
// თუ უსერის სახელი უდრის ლევანს მაშინ დაიბეჭდოს ტექსტი: hello levani;
// თუ უსერის სტუდენტის სტატუსი აქტიურია ან უსერის ასაკი ნაკლებია 25ზე დაიბეჭდოს ტექსტი: is active;
// ყველა დანარჩენ შემთხვევაში დაილოგოს ტექსტი:error

let user2 = {
    name: 'anna',
    age:  20,
    studentstatus: 'active'
};

// სტადარტული 
if (user2.age < 18 && user2.studentstatus === 'active') {
    console.log('hello user');
} else if (user2.name === 'levani') {
    console.log('hello levani');
} else if (user2.studentstatus === 'active' || user2.age < 25) {
    console.log('is active');
} else {
    console.log('error')
}

//ტერნარული - ახალი if 

let result = (user2.age < 18 && user2.studentstatus === 'active')
    ? 'hello user'
    : (user2.name === 'levani')
    ? 'hello levani'
    : (user2.studentstatus === 'active' || user2.age < 25)
    ? 'is active'
    : 'error';

console.log(result);

//7.მოცემულია მასივი, ამოიღეთ მხოლოდ ლუწი რიცხვები:
let array6 = [ 2, 3, 5, 10,25,24,11, 100,6,7, 10 ]

for (let index = 0; index < array6.length; index++) {
    if (array6[index] % 2 === 0) {
        console.log(array6[index])
    }
}

//8.მოცემულია მასივი, კონსოლში გამოიტანეთ მარტო ის ობიექტი, რომლის status property-ის მნიშვნელობა არის true;

let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
]

for (let index = 0; index < users.length; index++) {
    if (users[index].status === true) {
        console.log(users[index].username);
        // console.log(users[index])
    }
}

//9.Მოცემული მასივიდან ამოიღეთ მხოლოდ ციფრები, რომლებიც 5-ის ჯერადია:
let array7 = [32, 14, null, "40", 50];

for (let index = 0; index < array7.length; index++) {
    if (array7[index] % 5 === 0) {
        console.log(array7[index])
    }
}


//10.Მოცემული მასივიდან კონსოლში გამოიტანეთ მხოლოდ 30-ზე მეტი რიცხვები: 
let array8 = [ [2, 3, 5, 11], [1, 35, 11], [12, 36, 24] ];

for (let index = 0; index < array8.length; index++) {
    for (let i = 0; i < array8[index].length; i++) {
        if (array8[index][i] > 30) {
            console.log(array8[index][i]);
        }
    }
}
