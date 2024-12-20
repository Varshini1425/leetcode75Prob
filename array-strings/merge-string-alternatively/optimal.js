function mergeAlterString(word1, word2){
        // Array to store the output 
        let result = [];
        // minlength from the strings
        let minLength = Math.min(word1.length, word2.length);

        // All chars alternatively
        for(let i = 0 ; i < minLength; i++){
            result.push(word1[i], word2[i]);
        }

        if(word1.length > minLength){
            result.push(...word1.slice(minLength))
        }
        if(word2.length > minLength){
            result.push(...word2.slice(minLength))
        }
        return result.join("");
}


console.log(mergeAlterString("abc", "pqr"))
console.log(mergeAlterString("ab", "pqrs")); 
console.log(mergeAlterString("abcd", "pq"));