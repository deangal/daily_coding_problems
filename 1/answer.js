// This problem was recently asked by Google.

// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// Bonus: Can you do this in one pass?

/**
 * 
 * @param {number[]} list 
 * @param {nubmer} k 
 * @returns {boolean}
 */

function addup(list,k){
    const sameList = [...list]
    let check
    sameList.forEach(item => {
        sameList.forEach(sameItem => {
            if(item != sameItem && (item+sameItem == k)){
                check = true; 
            }   
        })
    })
    
    if(check == true){
        return true
    } else return false
}
console.log(addup([1,2,3,4],5));
