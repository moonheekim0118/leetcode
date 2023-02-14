/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    const numberOfCandyTypes = new Set(candyType).size;
    const limit = candyType.length / 2;
    
    return numberOfCandyTypes > limit ? limit : numberOfCandyTypes;
};