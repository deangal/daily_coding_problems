// This problem was asked by Airbnb.

// Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

// For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

// Follow-up: Can you do this in O(N) time and constant space?

const example = [2, 4, 6, 2, 5]


function sum(list){
   let startover = 0;
   let biggestSum = 0

   //iterate over list len
    for(i=0; i<4; i++){
      //  console.log(listObject);
       let jump = 2;
       let sumi = 0;
      // iterate over possiblitis
      for(let z=0 ; z<3;z++){
         let count = 0
          for(let index = startover; index<list.length; index+=jump){
            let listObject = list[index]
             count++
             sumi += listObject 
          }
          if(count>1){
             if(sumi > biggestSum){
                biggestSum = sumi

             }
          }
          sumi = 0
          jump++

         }
          startover++

       //iterate over for
    }
    console.log(`biggestSum:${biggestSum}`);

}

sum(example);