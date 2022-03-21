
//  Daily Coding Problem
//  Good morning! Here's your coding interview problem for today.
 
//  This problem was asked by Stripe.
 
//  Given an array of integers, find the first missing positive integer in linear time and constant space. In other words,
// find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.
 
//  For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
 
//  You can modify the input array in-place.

function missing(list){
    list.sort(function(a, b){return a - b});
    let lastItem 
    for(let i=0; i<list.length; i++){
        let dif = list[i+1] - list[i]
        if( dif > 1 && list[i] >= 0){

            return list[i] + 1 
        } else {
            lastItem = list[list.length-1] + 1
        }
    }
    return lastItem
}
console.log(missing([1,3,4,6]));
