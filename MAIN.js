function calculateSum(a, b) 
{
    return a + b;
}

function isEVEN(a)
{
    return a % 2 === 0;
}

function findMax(arr)
{
    return Math.max(...arr);
}

function filterOddNumbers(arr1)
{
    let oddNumbers = [];

    for(let i=0; i<arr1.length; i++)
    {
        if(arr1[i]%2 !== 0)
        {
            oddNumbers.push(arr1[i]);
        }
    }
    return oddNumbers;
}

function countWords(str) 
{
    const words = str.trim().split(/\s+/);
    return words.length;
}

function removeDuplicates(arr2)
{
    const num = new Set();

    for(let i=0; i<arr2.length; i++)
    {
        num.add(arr2[i]);
    }

    return [...num];
}


console.log("SUM OF TWO ELEMENT: " + calculateSum(10,10)); 
console.log("THIS IS A EVEN NUMBER: " + isEVEN(6) );
console.log("MAXIMUM NUMBER IS: " + findMax([1,6,3,9,2,10]) )
console.log("ODD NUMBERS ARRAY IS: " + filterOddNumbers([1,2,3,4,5,6,7,8,9]) )
console.log("NUMBER OF WORDS IN THE SENTENCE: " + countWords("count the number words in the sentence")); 
console.log("SET WITHOUT DUPLICATE NUMBER: " + removeDuplicates([1,2,3,1,4,2,5,7,4]))
