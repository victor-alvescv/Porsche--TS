// Basic Types in TS
let age: number = 25; // specifying that the result(age) must be a number;
let hobby: string = "Hello World"; // specifying that the result(hobby) must be a string;
let isAdult: boolean = true; // specifying that the result(isAdult) must be a boolean;
let fruit: any = "apple"; // specifying that the result(fruit) can be anything(not recommended to be used, since it contradicts the purpose of using TS);

// Arrays in TS
let fruits: string[] = ["Apple", "Orange", "Banana"]; // specifying the result(fruits)  must be a array filled only with strings;
let arr: any[] = [22, "a", true]; // specifying the result(arr) needs to be an array filled with any elements;
let numArr: number[][] = [[1], [2]]; // specifying the result(numArr) needs to be an array filled with arrays filled with numbers;

// Tuples(array with a pre-defined length and types for each index) in TS
let employee: [number, string] = [1, "Jack"]; // specifying the result(employee) needs to be an array filled with a number at the index 0, and a string at the index 1. The order and the values must be according to the tuples;
let employees: [number, string][] = [
  [2, "Sarah"],
  [3, "Jack"],
]; // specifying the result(employees) needs to be an array filled with arrays filled with arrays, filled with a number at the index 0, and a string at the index 1;

// Objects
let car: object = { brand: "Porsche", year: 2020, model: "718 Cayman" };
