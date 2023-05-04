// checking sum zero 
// [-5,-4,-3,-2,0,2,4,6,8] --> input 


function getSumZeroPair(arr){
for(let num of arr){
    for(let j = 1; j<arr.length; j++){
        if(num + arr[j] === 0){
            return [num, arr[j]]
        }
    }
}
}
// let result = getSumZeroPair([-5,-4,-3,-2,0,2,4,6,8] )

// console.log(result)

// o(n^2) quadratic time complexity 

//now lets optimize the solution

function getSumPair(arr){
    let left = 0;
    let right= arr.length -1 ;
    while(left < right){
        if(arr[left] + arr[right] === 0){
            return [arr[left], arr[right]]
        }else if(arr[left] + arr[right] > 0){
            right--
        }else{
            left++
        }

    }
}



// let result = getSumPair([-5,-4,-3,-2,0,2,4,6,8] )

// console.log(result)
// o(n) linear time complexity 

// this is the optimized solution to find the sum zero pair for a sorted array
// if the array is not sorted, then we first need to sort the array first then we can apply this logic

