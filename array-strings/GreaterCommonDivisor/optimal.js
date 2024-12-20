function gcdOfStrings (str1,str2){

 // Helper function to calculate the Greatest Common Divisor (GCD)
 const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

 // Step 1: Check if str1 + str2 is the same as str2 + str1
 if (str1 + str2 !== str2 + str1) {
   return ""; // If not, return an empty string because no common divisor exists
 }

 // Step 2: Calculate the GCD of the lengths of str1 and str2
 const gcdLength = gcd(str1.length, str2.length);

 // Step 3: Return the substring of str1 with length equal to gcdLength
 return str1.slice(0, gcdLength);

}

console.log(gcdOfStrings("ABCABC","ABC"))
console.log(gcdOfStrings("ABABAB","ABAB"))
console.log(gcdOfStrings("LEET","CODE"))