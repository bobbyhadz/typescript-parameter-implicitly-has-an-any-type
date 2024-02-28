export {};

// Parameter 'X' implicitly has an 'any' type in TypeScript

// EXAMPLE 1 - Explicitly setting the type of the parameters to `any`

function sum(a: any, b: any) {
  return a + b;
}

console.log(sum(10, 50)); // 👉️ 60

// ---------------------------------------------------

// // EXAMPLE 2 - With arrow functions

// const sum = (a: any, b: any) => {
//   return a + b;
// };

// console.log(sum(10, 50)); // 👉️ 60

// ---------------------------------------------------

// // EXAMPLE 3 - Type the function's parameters accordingly

// function sum(a: number, b: number) {
//   return a + b;
// }

// console.log(sum(10, 50)); // 👉️ 60
