// PROBLEM

// Given an array of integers `nums` and an integer `target`, return *indices of the two numbers such that they add up to `target`*.

// You may assume that each input would have ***exactly* one solution**, and you may not use the *same* element twice.

// You can return the answer in any order.



//SOLUTION (NEEDED HELP)

// const twoSum = function(nums, target) {
//     const seen = {};

//     for(let i = 0; i <nums.length; i++) {
//         const complement = target - nums[i]

//         if (complement in seen) {
//             return [seen[complement], i]
//         }

//         seen[nums[i]] = i
//     }

//     return []
// };