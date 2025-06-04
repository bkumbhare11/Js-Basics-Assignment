// ARRAY ASSIGNMENT

let shoppingList = [
  "Milk",
  "Eggs",
  "Bread",
  ["Apples", "Bananas", "Oranges"],
  ["Potatoes", "Tomatoes", "Onions"],
];

// 1
console.log(shoppingList[0]);

// 2
console.log(shoppingList);
shoppingList.push("Carrot");
console.log(shoppingList);

// 3
console.log(shoppingList);
shoppingList.pop();
console.log(shoppingList);

// 4
console.log(shoppingList);
shoppingList[4].splice(1, 2, "Cucumber", "Bell Pepper");
console.log(shoppingList);

// OBJECT ASSIGNMENT

let student = {
  name: "Amit",
  age: 20,
  grade: "A",
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "India",
  },
};

// 1
console.log(student.name);

// 2
console.log(student);
student.phone = "123-456-789";
console.log(student);

// 3
console.log(student);
delete student.grade;
console.log(student);

// 4
student.age = 21;
console.log(student);

// CONDITONAL ASSIGNMENT

// 1

let num = 4;
// let num = -9;

if (num > 0) {
  console.log("Number is Positive");
} else {
  console.log("Number is Negetive");
}

// 2

let score = 50;

if (score >= 90 && score <= 100) {
  console.log("A");
} else if (score >= 80 && score <= 89) {
  console.log("B");
} else if (score >= 70 && score <= 79) {
  console.log("C");
} else if (score >= 60 && score <= 69) {
  console.log("D");
} else {
  console.log("F");
}

// 3

let str = "";

if (str == "") {
  console.log("Falsy");
} else {
  console.log("Truthy");
}
