let myName: string;
myName = "bilal";
let year = 2020;
let years: number[] = [2020, 2021];

console.log(typeof year, myName);
const name = function (name: string): any {
  console.log((name = name[0].toUpperCase() + name.slice(1)));
};
const sayName = function (name: string): string {
  return (name = name[0].toUpperCase() + name.slice(1));
};
name(myName);
console.log(sayName(myName));
