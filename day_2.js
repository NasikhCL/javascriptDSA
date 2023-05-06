// string Anagram

// length should be same, arrangements can be different but letters should be same

//true
// 'hello' --> 'llheo'

//false
// 'hello' --> 'llleo'

// condition
// length check for both strings
// string 'hello'
// {h:1, e:1, l:2, o:1}
 

function isAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }
    let counter={}
    for(let letter of str1){
        // console.log(letter)
        counter[letter] = (counter[letter] || 0) + 1;
        // console.log(counter[letter], '/////')
    }
    for(let letter2 of str1){
        console.log(letter2)
        if(!counter[letter2]){
            return false;

        }
        counter[letter2] -=1;

        // console.log(counter[letter], '/////')
    }
    return true;


}

const resultIs = isAnagram('ahaa', 'hai')

console.log(resultIs)

//linear time complexity
//o(n)