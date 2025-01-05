/*

3. Merge Intervals
Problem: Write a function that takes a collection of intervals and merges all overlapping intervals.

Example: Input: [[1, 3], [2, 6], [8, 10], [15, 18]], Output: [[1, 6], [8, 10], [15, 18]]

4. Climbing Stairs
Problem: Write a function that calculates the number of distinct ways to climb a staircase with n steps, where you can either take 1 step or 2 steps at a time.

Example: Input: 3, Output: 3 (ways: [1,1,1], [1,2], [2,1])

5. Find the Minimum in a Rotated Sorted Array
Problem: Write a function that finds the minimum element in a rotated sorted array.

Example: Input: [3, 4, 5, 1, 2], Output: 1
*/

//Question = 1. Binary Search: Write a function that implements binary search on a sorted array and returns the index of the target element.
// let binarySearch = (arr,target) => {
//     // console.log(arr.indexOf(target))
//     //or
//     let latestIndex = [];
//     arr.forEach((currElem,index) => {
//         if(currElem == target){
//             latestIndex += index;
//         }

//     })

//     if(latestIndex == 0){
//         console.log("false")
//     }
//     else{
//         console.log(latestIndex.at(0))
//     }
// }
// binarySearch([1,2,3,5],5);

//Question 2 = Write a function that finds a peak element in an array. A peak element is an element that is greater than its neighbors.
// let peakElement = (a) => {
//     for(let i = 1 ; i<a.length-1 ; i++){
//         if(a[i] > a[i-1] && a[i] >a[i+1]){
//             return a[i];
//         }
//     }
// }
// console.log(peakElement([1,2,3,4,2]))

//Question 3 = Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
// function createCounter(n) {
//     let num  = n-1;
//     return function(){
//         num++;
//         return num;

//     }

// }

// const counter = createCounter(5);
// console.log(counter())//5
// console.log(counter())//6
// console.log(counter())//7

