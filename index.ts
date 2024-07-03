// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// BASIC TYPES IN TS ->
let age: number = 25; // specifying that the result(age) must be a number;
let hobby: string = "Hello World"; // specifying that the result(hobby) must be a string;
let isAdult: boolean = true; // specifying that the result(isAdult) must be a boolean;
let fruit: any = "apple"; // specifying that the result(fruit) can be anything(not recommended to be used, since it contradicts the purpose of using TS);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// ARRAYS TYPES IN TS ->
let fruits: string[] = ["Apple", "Orange", "Banana"]; // specifying the result(fruits)  must be a array filled only with strings;
let arr: any[] = [22, "a", true]; // specifying the result(arr) needs to be an array filled with any elements;
let numArr: number[][] = [[1], [2]]; // specifying the result(numArr) needs to be an array filled with arrays filled with numbers;

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// TUPLES TYPES(array with a pre-defined length and types for each index) ->
let employee: [number, string] = [1, "Jack"]; // specifying the result(employee) needs to be an array filled with a number at the index 0, and a string at the index 1. The order and the values must be according to the tuples;
let employees: [number, string][] = [
  [2, "Sarah"],
  [3, "Jack"],
]; // specifying the result(employees) needs to be an array filled with arrays filled with arrays, filled with a number at the index 0, and a string at the index 1;

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// OBJECTS TYPES ->
let car: { brand: string; year: number; model: string } = {
  brand: "Porsche",
  year: 2020,
  model: "718 Cayman",
}; // specifying the result(car) needs to be an object filled with 3 keys with values of string, number, string respectively;

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// CUSTOM TYPES IN TS ->
type Car = {
  brand: string;
  year: number;
};

let carX: Car = {
  brand: "Porsche",
  year: 2020,
};

/* 

. Using type Car, we create a custom type. A type is what we put after the variable name, and by creating a custom one, we have the freedom to do what we want with it, and not be...
closed to only use "string, number, boolean and more" as a type. So in this case istead of writing {brand: string, year: number} on line 32, we create the type car, and call it as...
the type.

*/

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// INTERFACE -> Is another way to write objects! Interfaces in TypeScript are a powerful way to define and enforce the structure of objects.
interface Car1 {
  brand: string;
  year: number;
}

let newCar: Car1 = {
  brand: "Porsche",
  year: 2020,
};

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// UNION -> Let's a variable holds more than one value;
let x: string | number = "Hello World";
/* In this case we are saying that the variable "x" can have two different types of value, a string, or a number, and the or is used with the Union icon(|)! ps: yo can add more than... 
2 types */

type occupation = "employed" | "student";
let jackOccupation: occupation = "employed";
/* Combining Custom Types with Union, we can create this! We are saying that the custom type occupation can actually have more than one result(2 in this case), either the string...
"employed" or the string "student", if the result of a variable that uses the occupation type is different than those two, we have an error!
*/

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// TYPE ASSERTION -> Let's say we create a variable called y with the type of any, that initially is a string. With Type Assertion we are able to specify the type of the change!
let y: any = "a";
y = <number>22;

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// FUNCTIONS ->

// How to write function that returns something -> the parameters should have their type specified, and after that we need to write what type will be the result of the function;
function add(x: number, y: number): number {
  return x + y;
}
add(2, 5);

// How to write function that don't return anything ->
function sayHi(msg: string): void {
  console.log(msg);
}
sayHi("hey");

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// GENERICS ->

/* In this case we are creating a function that takes an array and returns a copy of that array. We added three T's, which are things called "generics", creating a... 
placeholder to the function called T(it can be anything). So when we create the numCopy and strCopy variables, inside it we call the function, and in the place of the T, we set the...
type(T) to the type in question, followed by the parameter(array with T's, where in numCopy is a number, and in strCopy is a string!);

ps -> the first T is to create the placeholder, the second one is to specify the type of the array which is an array filled with T, and of course the third T is the result, an array...
filled with T;

*/
function copyArr<T>(arr: T[]): T[] {
  return [...arr];
}
let numCopy = copyArr<number>([1, 2, 3]);
let strCopy = copyArr<string>(["1", "2", "3"]);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

/* ENUMS(enumerations) -> A feature in TypeScript that allows you to define a set of named constants in a object. So we start creatin an enum object called EyeColor with colors as...
keys inside the object. We are going to create a function that displays in the console a student given information(including the eye color). So we create the function displayStudent...
getting as a parameter, a "student" with the type of Student(interface), that is an object filled with three different properties, name as a string, age as a number and EyeColor as...
the EyeColor enum object. So back to the displayStudent function we console.log the three expected properties, we call the function passing an object with the three expected keys, the...
eyeColor specified as the brown key inside the EyeColor enum object! And the result at the console log is: 

Jack
20
Common eye color

*/

enum EyeColor {
  brown = "Common eye color",
  blue = "Rare eye color",
  green = "Very rare eye color",
}

interface Student {
  name: string;
  age: number;
  eyeColor: EyeColor;
}

function displayStudent(student: Student): void {
  console.log(student.name + "\n" + student.age + "\n" + student.eyeColor);
}

displayStudent({
  name: "Jack",
  age: 20,
  eyeColor: EyeColor.brown,
});

// ps -> If you want to a property to be optional, add a "?" after the name, Ex: age?: 29;
