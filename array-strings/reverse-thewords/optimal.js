var reverseWordsOfString = function(s){

    // const words = [];
    // let word = "";

    // for(let char of s){
    //     if(char !== ''){
    //         word = word + char;
    //     }else if(word){
    //         words.push(word);
    //         word = ' ';
    //     }

        
    // }
    // if(word) words.push(word);

    // return words.reverse().join('');


    // Step 1: Remove leading and trailing spaces, and split the words
    const words = [];
    let word = '';
    for (let char of s) {
        if (char !== ' ') {
            word += char; // Build the word
        } else if (word) {
            words.push(word); // Add the word to the list
            word = ''; // Reset word
        }
    }
    if (word) words.push(word); // Add the last word if it exists

    // Step 2: Reverse the words and join them with a single space
    return words.reverse().join(' ');


}

console.log(reverseWordsOfString("the sky is blue"));
console.log(reverseWordsOfString("  hello world  "));
console.log(reverseWordsOfString("a good   example"));
