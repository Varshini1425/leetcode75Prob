var kidsWithCandies = function(candies, extraCandies) {
    

    const result = [];

    const Maxcandies = Math.max(...candies);
    

    for(let i = 0; i < candies.length; i++){
        result.push(candies[i] + extraCandies >= Maxcandies)
    }
    return  result;
};


console.log(kidsWithCandies([2,3,5,1,3], 3) , " First array");
console.log(kidsWithCandies([4,2,1,1,2], 1) , " Second array");
console.log(kidsWithCandies([12,1,12], 10) , " Third array");