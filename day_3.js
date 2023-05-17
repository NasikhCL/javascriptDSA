// count unique number
// [1,1,2,2,3,4,5,6,7,8,8]
//outuput --> 8


// self impli

// let newArr = [1,1,2,3,3,3,4,5,6,7,7,8];
// function countUnq(arr){
//     console.log(arr.length)
//     let count =0;
//     let j=0;
//     while(j < arr.length){
//         console.log(arr[j],'/////',arr[j+1], 'count', count)
//         console.log(count)
//         if(arr[j] == arr[j+1]){
//             // console.log(arr[j],'/////',arr[j+1])
//             // count++
//             arr[j+1] = arr[j]
//             j++;
//             continue;
//         }
//         console.log(arr,'inside arr')
//         j++
//         count++;
//     }
//     return count;
// }

// console.log(countUnq(newArr), '////', newArr)













// solution


// condition 
// i = 0, j = 1
// array[i] !== array[j]?
// i++;
// array[i] = array[j]
let myArr = [1,1,2,2,3,4,5,6,7,8,8];

function countUnique(array){
    let arr = array
    if(arr.length >0){

        let i=0;
        for(let j=1; j< arr.length; j++){
            if(arr[i]!== arr[j]){
                i++;
                arr[i] = arr[j]
            }
        }
        return  i;
    }else{
        return false
    }
}
result = countUnique(myArr)

console.log(result)
// console.log(myArr)