let nos=[1,2,3,4,5];
//shift method
console.log("The initial array is:",nos);
let fno=nos.shift();
console.log("Array after shift:",nos);
console.log("The no got shifted:",fno);
//unshift
nos.unshift(10);
console.log("Array after unshift:",nos);
let nums=[1,2,3,4,5];
//nums.splice(4,1);
//console.log("Array after deletion:",nums);
nums.splice(5,0,6);//indexno, no of elments to replace, element to be relace
//indexno, no of elements to be inserted
console.log("Array after splice insertion:",nums)