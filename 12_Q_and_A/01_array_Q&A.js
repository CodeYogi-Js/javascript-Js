//✅Problem # 1 Write a function that returns the sum of all number in an array.
//➡️
// const myArray = [1, 2, 3, 4, 5];
// const sumOfArray = function(array){
//     let result = 0;
//     for(let i = 0; i < array.length; i++){
//         result +=array[i]
//     }
//     return result
// }
// console.log(sumOfArray(myArray))

//✅Problem #2 Write a function to find the maximum value in an array of numbers.
//➡️
// const myArray1 = [2, 4, 5, 1, 3];
// const findMaxValue = function (array){
//     const max = Math.max(...array)
//     return max
// }
// console.log(findMaxValue(myArray1))

//✅Problem #3 Write a function to find the minimum value in an array of numbers.
//➡️
// const myArray2 = [2, 4, 5, 1, 3]
// function findMinValue(array){
//     const min = Math.min(...array)
//     return min
// }
// console.log(findMinValue(myArray2))

//✅Give me The maximum number of Arr and minimum number of array?
//➡️
// const arr = [183, 526, 947, 312, 764, 891, 205, 678, 439, 350];
// let min = Number.MAX_SAFE_INTEGER
// let max = Number.MIN_SAFE_INTEGER
// console.log(min ,'min value', max , 'max value')
// let i = 0;
// while(i < arr.length){
//     if(arr[i] > max){
//         max = arr[i]
//     }
//     if(arr[i] < min){
//         min = arr[i]
//     }
//     i++
// }
// console.log(`array max value is ${max}, and min value is ${min}`)




//✅Problem #4 Write a function to reverse the elements of an array.
//➡️
// const myArray3 = [2, 4, 5, 1, 3]
// function reverseArray(array){
//     let reverse = [];
//     let index = array.length - 1
//     for(let i = 0; i < array.length; i++){
//         reverse.push(array[index])
//         index --;
//     }
//     return reverse
// }
// console.log(reverseArray(myArray3))

//✅Problem #5 Write a function to remove duplicates from an array.
//➡️
// const nums2 = [9, 9, 8, 7, 6, 6, 5, 5, 5];
// function removeDuplicate(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] == array[j]) {
//         array.splice(j, 1)
//         j--;
//       }
//     }
//   }
//   return array;
// }
// console.log(removeDuplicate(nums2));
//➡️
// const duplicateArray = [2, 4, 4, 5, 2, 1]
// function removeDuplicat(array){
// const remove = [...new Set(array)]
//     return remove
// }
// console.log(removeDuplicat(duplicateArray))

/*❓- It removes duplicates automatically. It’s not an array, but it looks similar.
- Set is a built-in constructor function in JavaScript.
- new Set() creates a new Set object.
- You pass an array into it: new Set([2, 4, 4, 5, 2, 1]).*/





//✅Problem #6 Write a function that counts how many times a specific element appears in an array.
//➡️
// const arr = [5, 2, 5, 3, 5, 2, 4];
// function countElement(array, count){
//     let val = 0;
//     for(let i = 0; i < array.length; i++){
//         if(array[i] == count){
//             val++
//         }
//     }
//     return val;;
// }
// console.log(countElement(arr, 3))

//✅Problem #7 Write a function to calculate the average of numbers in an array.
//➡️
// const array = [10, 20, 30]
// const averageArray = (array)=>{
//     let countOfEle = 0;
//     let sumOfEle = 0
//     for(let i = 0; i<array.length; i++){
//         sumOfEle += array[i]
//         countOfEle++
//     }
//     return `${sumOfEle / countOfEle}`
// }
// console.log(averageArray(array))


// ✅Problem #8 Write a function to merge two arrays into a single array.
// ➡️
// const array1 = [10, 20, 30]
// const array2 = [5, 2, 5, 3, 5, 2, 4];
// function mergeArray(arr1,arr2){
//     let newArr = []
//     return newArr = arr1.concat(arr2)
// }
// console.log(mergeArray(array1, array2))


// ✅Problem #9 Write a function to find the index of a specific element in an array.
//➡️
// const array2 = [5, 2, 5, 3, 5, 2, 4];
// const indexElement = function(array, ele){
//     const value = array.indexOf(ele)
//     return value
// }
// console.log(indexElement(array2, 3))

//✅Problem #10 Write a function that returns true if an array contains a specific element.
//➡️
// const array3 = [5, 2, 5, 3, 5, 2, 4];
// const elementsAnswer = (array, ele)=>{
//     const value = array.includes(ele)
//     return value
// }
// console.log(elementsAnswer(array3, 2))


//✅Problem #11 Write a function to find the second largest number in an array
//➡️
// const arr = [183, 526, 947, 312, 764, 891, 205, 678, 439, 350];
// function secondLast(array){
//     let max = Number.MIN_SAFE_INTEGER;
//     let secLast = Number.MIN_SAFE_INTEGER;
//     for(let i = 0; i < array.length; i++){
//         if(array[i] > max){
//             max = array[i]
//         }
//     }
//     for(let j = 0; j < array.length; j++){
//         if((array[j] > secLast)&&(array[j]< max)){
//             secLast = array[j]
//         }
//     }
//     return secLast
// }
// console.log(secondLast(arr))