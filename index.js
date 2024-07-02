"use strict";
// Basic Types in TS
let age = 25; // specifying that the result(age) must be a number;
let hobby = "Hello World"; // specifying that the result(hobby) must be a string;
let isAdult = true; // specifying that the result(isAdult) must be a boolean;
let fruit = "apple"; // specifying that the result(fruit) can be anything(not recommended to be used, since it contradicts the purpose of using TS);
// Arrays in TS
let fruits = ["Apple", "Orange", "Banana"]; // specifying the result(fruits)  must be a array filled only with strings;
let arr = [22, "a", true]; // specifying the result(arr) needs to be an array filled with any elements;
let numArr = [[1], [2]]; // specifying the result(numArr) needs to be an array filled with arrays filled with numbers;
// Tuples(array with a pre-defined length and types for each index) in TS
let employee = [1, "Jack"]; // specifying the result(employee) needs to be an array filled with a number at the index 0, and a string at the index 1. The order and the values must be according to the tuples;
let employees = [
    [2, "Sarah"],
    [3, "Jack"],
]; // specifying the result(employees) needs to be an array filled with arrays filled with arrays, filled with a number at the index 0, and a string at the index 1;
// Objects
let car = { brand: "Porsche", year: 2020, model: "718 Cayman" };