// Task 1 :
// ანა არის 28 წლის , ხოლო მისი ძმა ლევანი 21ის .

// გამოიყენეთ ცვლადები , რომელშიც შეინახავთ თითოეულის ასაკს და სახელს.
// განსაზღვრეთ ახალი სტრინგ ტიპის ცვლადი რომელიც შეინახასვს ტექსტს :
// 'ანა ლევანზე 7 წლით უფროსია'
// სხვაობა დათვალეთ დინამიურად ცვლადების და არითმეტიკული ოპერატორების გამოყენებით
// დალოგეთ ზემოაღნიშნული ცვლადი .

const sister = {
    name: "Anna",
    age: 28
};
const brother = {
    name: "Levan",
    age: 21
};

let sentence = `${sister.name} ${brother.name}-ზე ${sister.age - brother.age} წლით უფროსია`;
console.log(sentence);

/*
    Task 2 : 
        გვაქვს სტუდენტების სახელების მასივი ['John','Sam','Ann','Will','Andrew','Joseph','Lorelai','Amelie','Den']
        დალოგეთ სიის ზუსტად შუაში მყოფი სახელი.

*/

let studArr = ['John', 'Will', 'Andrew', 'Joseph', 'Lorelai', 'Amelie', 'Den'];
let middleEl = (studArr.length - 1)/2;
console.log(studArr[middleEl]);

// ფუნქცია კენტი რაოდენობისთვის:
let studentsArr = ['John', 'Will', 'Andrew', 'Joseph', 'Lorelai', 'Amelie', 'Den'];

function midFromOdd(arr){
    return arr[(arr.length - 1)/2];
}
let midEl = midFromOdd(studentsArr);
console.log(midEl);

// ფუნქცია ლუწი რაოდენობის ელემენტებიდან მარცხნივ მდგომისთვის:
let ordNum = ['first', 'second', 'third', 'leftmiddle', 'rightmiddle', 'sixth', 'seventh', 'eighth'];

function leftMidFromEven(arr){
    return arr[arr.length / 2 - 1];
}
let midLeft = leftMidFromEven(ordNum);
console.log(midLeft);

// ფუნქცია ლუფი რაოდენობის ელემენტებიდან მარჯვნივ მდგომისთვის:
let ordNum2 = ['first', 'second', 'third', 'leftmiddle', 'rightmiddle', 'sixth', 'seventh', 'eighth'];

function rightMidFromEven2(arr){
    return arr[arr.length / 2];
}
let midRight = rightMidFromEven2(ordNum2);
console.log(midRight);
// ან გამოვიძახებთ ასე
console.log(rightMidFromEven2([1, 2, 3, 4, 5, 6, 7, 8]));

/*
    Task 3 : 
    Part 1 : შექმენით სტუდენტის ობიექტი , რომელსაც აქვს 5 property : firstName; lastName; age; subjects; roommate;

    firstname,lastname - string type
    age - number
    subject - object (array of strings)
    roommate - object (რომელსაც აქვს თავის მხრივ ორი property : fullname , age )

    მნიშვნელობები მიანიჭეთ ტიპების მიხედვით . subject- მასივი უნდა შედგებოდეს არანაკლებ 5 ელემენტისგან

    Part 2 : 
        for ციკლის გამოყენებით დალოგეთ თუ რა საგნებს სწავლობს სტუდენტი , subject arrayს ელემენტები.

        ასევე შექმენით ახალი ცვლადი fullName რომელშიც შეინახავთ სტუდენტის სრულ სახელ და გვარს.

        ეს fullName მნიშვნელობასთან ერთად დაამატეთ სტუდენტის ობიექტს. 
         
        დაამატეთ ცვლადი result რომლის მნიშვნელობაც იქნება წინადადება : 
            ' (სტუდენტის სახელი და გვარი) არის age წლის და მისი რუმმეითი არის : roommate fullname
        
*/

// Part 1
let student = {
    firstName: "ნინო",
    lastName: "ნინიძე",
    age: 22,
    subjects:["Math", "History", "Geography", "JavaScript", "Angular"],
    roommate:{
        fullName: "ლიკა" + " " + "ღლონტი",
        age: 30
    }
}

let subjectsArr = student.subjects;
for (let i=0; i<subjectsArr.length; i++) {
    console.log(subjectsArr[i]);
}

student.fullName = student.firstName + " " + student.lastName;
console.log(student);

let resultSent = `${student.fullName} არის ${student.age} წლის და მისი რუმმეითი არის ${student.roommate.fullName}.` ;
console.log(resultSent);

// მეორენაირად
let student = {
    firstName: "ნინო",
    lastName: "ნინიძე",
    age: 22,
    subjects:["Math", "History", "Geography", "JavaScript", "Angular"],
    roommate:{
        fullName: "ლიკა" + " " + "ღლონტი",
        age: 30
    }
}
for (let i=0; i<student.subjects.length; i++) {
    console.log(student.subjects[i]);
}

let fullNameSt = student.firstName + " " + student.lastName;
student.fullName = fullNameSt;
console.log(student);

/*
    Task 4 : 
        გვაქვს  მასივი : ["Banana", "Orange", "Apple", "Mango",2,12]
        გამოიყენეთ while ციკლი და მანამ სანამ მასივის ელემენტის ტიპი არის სტრინგი
        დალოგეთ ეს ელემენტი.

*/

let fruitArr = ["Banana", "Orange", "Apple", "Mango", 2, 12];
for(let i=0; i<fruitArr.length; i++){
    let typ = typeof fruitArr[i];

    if(typ == 'string'){
        console.log(fruitArr[i]);
    }
}
// პირველად for-ით გავაკეთე,  while-ით ვერა და ვიდეოს ნახვის მერე დავწერე. 
let fruitArr2 = ["Banana", "Orange", "Apple", "Mango", 2, 12];
let i=0;
while(typeof fruitArr2[i] == 'string'){
    console.log(fruitArr2[i]);
    i++;
}

/*
    Task 5 : 
    გვაქვს მასივი : [12,23,43,11,9,2,121,90]
    თუ მასივის ელემენტი მეტია 31ზე და თან არის ლუწი მაშინ დალოგეთ : 'Element is greater than provided value and is EVEN'
    თუ მასივის ელემენტი ნაკლებია 31ზე და თან არის კენტი მაშინ დალოგეთ : 'Element is less than provided value and is ODD'

*/

let numsArr = [12, 23, 43, 11, 9, 2, 121, 90];

for (i=0; i<numsArr.length; i++){
if(numsArr[i]>31 && numsArr[i]%2 === 0) {
    console.log(numsArr[i] + '---Element is greater than provided value and is EVEN');
}
if(numsArr[i]<31 && numsArr[i]%2) {
    console.log(numsArr[i] + '---Element is less than provided value and is ODD')
}
}
// მეორენაირად:
let numsArr2 = [12, 23, 43, 11, 9, 2, 121, 90];

for (i=0; i<numsArr2.length; i++){
    let el = numsArr2[i];
if(el>31 && el%2 === 0) {
    console.log(el + '---Element is greater than provided value and is EVEN');
}
else if(el<31 && el%2) {
    console.log(el + '---Element is less than provided value and is ODD')
}
}


//part 2

//Task 1
/*
    შექმენით ფუნქცია რომელსაც აქვს ერთი პარამეტრი . 
    ფუნქციას გადაეცით ობიექტი არგუმეტნად 
    
    let sampleObject = {
        isItarable : false,
        sampleArray : [12,63,21,34,98,57]
    }
    თუ მიღებული არგუმენტის isItarable მნიშვნელობა არის ჭეშმარიტი მაშინ დალოგეთ თითოეული ელემენტი
    თუ არ არის ჭეშმარიტი გამოიტანეთ წინადადება "provided array isn't itarable"

*/
let sampleObject = {
    isIterable : false,
    sampleArray : [12,63,21,34,98,57],
};
function checkAndIterate (obj){
    if (obj.isIterable) {
    for (let el of obj.sampleArray) {
        console.log(el);
    }
    } else {
        console.log("provided array isn't Iterable");
    }
}
checkAndIterate(sampleObject);


//Task 2
/*
    შექმენით ფუნქცია checkPythagoras რომელიც მიიღებს სამ პარამეტრს x,y,z .
    ფუნქციამ უნდა შეამოწმოს თუ აღნიშნული რიცხვების რომელიმე კომბინაცია მაინც
    აკმაყოფილებს პითაგორას თეორემის პირობას a^2 + b^2 = c^2;
    თუ კი ეს პირობა დაკმაყოფილდა ფუნქციამ უნდა დააბრუნოს true 
    წინააღმდეგ შემთხვევაში false
    
*/
function checkPythagorasCalc (x,y,z) {
  return x*x + y*y == z*z;
}
const checkPythagoras = function (a,b,c){
    return (
    checkPythagorasCalc (a,b,c)||
    checkPythagorasCalc (a,c,b)||
    checkPythagorasCalc (b,c,a)
    )
}



//Task 3
/*
    დაწერეთ ფუნქცია minMax რომელიც იღებს 1 მასივის ტიპის პარამეტრს 
    და დააბრუნებს მასივის ელემენტებს შორის მაქსიმალურს და მინიმალურს ელემენტს .
    მაგ : [2,14,25,75,11,6] თუ კი ამ მასივს გადავცემთ არგუმენტის სახით ფუნქციამ უნდა
    დააბრუნოს "Min value is 2 and Max value is 75"
*/
let minMaxArr = [2,14,25,75,11,6,111,-1];

function minMax (arr) {
    let max = arr[0];
    let min = arr[0];
    for(let i=0; i<arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
        if (arr[i]<min) {
            min = arr[i];
        }
    } 
    return `"Min value is ${min} and Max value is ${max}`;
}
let minMaxEl = minMax(minMaxArr);
console.log(minMaxEl);

//Task 4

/*
დაწერეთ ფუნქცია რომელმაც გადაცემული კუთხის მნიშვნელობით უნდა დააბრუნოს
თუ რა ტიპის კუთხეა . 
კუთხის სახეები:
Acute angle: An angle between 0 and 90 degrees.
Right angle: An 90 degree angle.
Obtuse angle: An angle between 90 and 180 degrees.
Straight angle: A 180 degree angle.

*/

function checkDeg (deg) {
  if (deg>0 && deg<90){
    return `Acute angle: An angle between 0 and 90 degrees.`
  } else if (deg===90){
    return `Right angle: An 90 degree angle.`
  } else if (deg>90 && deg<180){
    return `Obtuse angle: An angle between 90 and 180 degrees.`
  } else if (deg===180){
    return  `Straight angle: A 180 degree angle.`
  } else return `can't identify`
}

console.log(checkDeg(400));

// იგივე ფუნქცია swich case-ით:
function checkDeg (deg){
switch (true) {
    case deg > 0 && deg < 90:
        return `Acute angle: An angle between 0 and 90 degrees.`;
    case deg === 90:
        return `Right angle: An 90 degree angle.`;
    case deg > 90 && deg < 180:
        return  `Obtuse angle: An angle between 90 and 180 degrees.`
    case deg ===180:
        return   `Straight angle: A 180 degree angle.`
    default:  
     return `this value cannot be the value of deg`       
}
}
console.log(checkDeg(400));

//Task 5
/*
    დაწერეთ ფუნქცია checkStudentGrade რომელიც მიიღებს ობიექტების მასივს. 
    მაგალითად [{name: student1; grade : 91}, {name: student2; grade : 71}, {name: student3; grade : 45} ]
    ფუნქციამ სტუდენტის ქულის მიხედვით უნდა განსაზღვროს საფინალო შედეგი finalResult 
    ქვემოთ არსებული ცხრილის მიხედვით და ელემენტის ობიექტში დაამატოს propertyს სახით
    მიღებული მასივი დააბრუნებინეთ ფუნქციას .

    0-50 = F
    51-60 = E
    61-70 = D
    71-80 = C
    81-100 = A

    საორიენტაციოდ შედეგი აღნიშNული მაგალითის მიხედვით უნდა იყოს
    [{name: student1; grade : 91 ; finalResult : 'A'}, {name: student2; grade : 71,finalResult : 'C'}, {name: student3; grade : 45, finalResult : 'F'} ]


*/
let studentsObjArr = [{name: "student1",  grade : 91}, {name: "student2", grade : 71}, {name: "student3", grade : 45}, {name: "student4", grade: 60}, {name: "student5", grade: 55}];

function checkStudentGrade (arr) {
    for (let i=0; i<arr.length; i++){
        if(arr[i].grade > 0 && arr[i].grade <= 50) {
            arr[i].finalResult = 'E'
        }
        if(arr[i].grade >= 51 && arr[i].grade <= 60) {
            arr[i].finalResult = 'D'
        }
        if(arr[i].grade >= 61 && arr[i].grade <= 70) {
            arr[i].finalResult = 'C'
        }
        if(arr[i].grade >= 71 && arr[i].grade <= 80) {
            arr[i].finalResult = 'B'
        }
        if(arr[i].grade >= 81 && arr[i].grade <= 100) {
            arr[i].finalResult = 'A'
        } 
        console.log(arr)
}
}
checkStudentGrade(studentsObjArr);

// ამაზე ბევრი ვიწვალე, თავიდან იმის გამო, რომ პატარა ორთოგრაფიული შეცდომა მქონია დაშვებული, ამის გამო ვერ ვიგებდი კოდს სწორად ვაგებდი თუ არა. შეცდომა რომ გავასწორე მერე რამდენიმე მცდელობაში გამომივიდა.