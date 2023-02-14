/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const keyboard=[
    new Set(['q','w','e','r','t','y','u','i','o','p']),
    new Set(['a','s','d','f','g','h','j','k','l']),
    new Set(['z','x','c','v','b','n','m'])
    ];

    const parseToLowerCaseArray=(str)=> [...str.toLowerCase()];

    const checkIsInSameLine = (word) => {
        return keyboard.some((keyboardWords)=>{
            return parseToLowerCaseArray(word).every((alphabet)=> keyboardWords.has(alphabet))
        });
    }

    return words.filter((word)=>checkIsInSameLine(word));
};