// This problem was asked by Amazon.

// There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time. Given N,
//  write a function that returns the number of unique ways you can climb the staircase. The order of the steps matters.

// For example, if N is 4, then there are 5 unique ways:

// 1, 1, 1, 1
// 2, 1, 1
// 1, 2, 1
// 1, 1, 2
// 2, 2
// What if, instead of being able to climb 1 or 2 steps at a time, you could climb any number from a set of positive integers X? For example, 
// if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time.

function climb(n){
    let answer = []
    function one_array(){
        let arr = []
        for(i=0;i<n ;i++){
            arr.push(1)
        }
        answer.push(arr)
    }
    
    function two_array(){
        if(n%2 == 0){
            arr=[]
            for(i=0;i<n/2;i++){
                arr.push(2)
            }
            answer.push(arr)
        } else if(n%2 == 1 && n/2 >= 2) { // if n is odd and bigger than 4 than add single one to two array
            for(i=0;i<n-2 ;i++){
                let arr2 = []
            
                    for(j=0;j<n-2 ;j++){
                    arr2.push(2)
                }
                arr2[i] = 1
                answer.push(arr2)
            }
        }
    }

    function single_two_and_one_array(){
        if(n > 2){
            for(i=0;i<n-1 ;i++){
                let arr = []

                
                for(j=0;j<n-1 ;j++){
                    arr.push(1)
                }
                arr[i] = 2
                answer.push(arr)
            }
        }

    }

    // run functions
    one_array()
    two_array()
    single_two_and_one_array()
    console.log(answer);
}


climb(3)