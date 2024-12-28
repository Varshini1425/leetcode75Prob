var reverseVowels = function (s) {

// Storing the vowels chars
const vowels = new Set (['a','e','i','o','u','A','E','I','O','U']);


// converting the string to array for mutations
const chars = s.split("");

let left = 0, right = chars.length - 1;

while(left<right){
    if(!vowels.has(chars[left])){
        left++;
    }else if(!vowels.has(chars[right])){
        right--;
    }else{
        [chars[left],chars[right]] = [chars[right],chars[left]];
        left++;
        right--;
    }
}

return chars.join('');

};

console.log(
  reverseVowels("IceCreAm"),
  "After reversing the vowels of the strings "
);
console.log(
  reverseVowels("leetcode"),
  "After reversing the vowels of the strings "
);
