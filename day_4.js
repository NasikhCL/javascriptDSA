// palindrome problem

function checkPalindrome(str){
    let string1 = str, revString1 =''
    for(let i =string1.length-1; i>=0;i--){
        revString1 += string1[i]
    }
    return string1 === revString1
}

// function checkPalindrome(str){
//     if(!str){
//         return false;
//     }
//     str = str.toLowerCase();
//     let TransStr="";
//     for(i=0; i <str.length;i++){
//         if(str[i] === " "){

//         }
//         else{
//             TransStr += str[i]
//         }
//         console.log(TransStr)
//     }
//     let revStr = ""
//     for(let i=TransStr.length-1; i>=0; i--){
//         revStr += TransStr[i];
        
//     }
//     if(TransStr === revStr){
//         return true;
//     }
//     else{
//         return false
//     }
//     // console.log(revStr)
// }

console.log(checkPalindrome('malay alam'))