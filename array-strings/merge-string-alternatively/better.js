// let word1 = "ab", word2 = "pqrs"

function mergeAlterString(word1, word2){
    let i = 0, j = 0, result = "";


    while(i < word1.length || j < word2.length ){
        if(i < word1.length) result += word1[i++];
        if(j < word2.length) result += word2[j++];
    }

    return result;
}

console.log(mergeAlterString("abc", "pqr"));    // Output: "apbqcr"
console.log(mergeAlterString("ab", "pqrs"));    // Output: "apbqrs"
console.log(mergeAlterString("abcd", "pq"));    // Output: "apbqcd"