const perf = require('execution-time')();

//////////////////// One
function addToZero(arr){
    let trueFalseArr = []
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i] + arr[j] === 0 && arr[i] !== 0){
                trueFalseArr.push(true)
            } else {
                trueFalseArr.push(false)
            }
        }
    }
    if(trueFalseArr.includes(true)){
        return (`${arr} is ` + true)
    } else {
        return (`${arr} is ` + false)
    }
    
}

let genericArr = [1, 2, 3, -2]

console.log(addToZero(genericArr))


//Time Complexity of the function addToZero is O(n^2)
//Space Complexity of the function addToZero is O(1)




//////////////////// Two


function hasUniqueChars(word){
    let checkedLetters = ""
    let smolChars = word.toLowerCase()
    for(let i = 0; i < smolChars.length; i++){
        if(checkedLetters.includes(smolChars[i]) === false){
            checkedLetters += smolChars[i]
        } else {
            return console.log(`${word} is ` + false)
        }
    }
    console.log(`${word} is ` + true)
}

hasUniqueChars("Monday")
hasUniqueChars("Momday")
hasUniqueChars("Moonday")

//Time Complexity of the function addToZero is O(n^2)
//Space Complexity of the function addToZero is O(1)


//////////////////// Three
function isPanagram(str){
    let regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    let fullAlphabet = 'abcdefghijklmnopqrstuvwxyz'
    let newStr = str.toLowerCase().replace(regex,"").split(' ').join('')
    for(let i = 0; i < fullAlphabet.length; i++){
        if(newStr.includes(fullAlphabet[i]) === false){
            return console.log(`"${str}" is NOT a panagram`)
        }
    }
    console.log(`"${str}" is a panagram`)
}

isPanagram(`I told the witch doctor I was in love with you.`)
isPanagram(`The quick brown fox jumps over the lazy dog.`)

//Time Complexity of the function addToZero is O(n)
//Space Complexity of the function addToZero is O(1)



//////////////////// Four
function findLongestWord(arr){
    //uncomment the two lines below and write the word 'scentence' as the expected parameter to be able to write a scentence and return the longest word's length in that scentence.
    // let regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    // let arr = scentence.replace(regex, "").split(" ")
    let lengths = []

    for(let i = 0; i < arr.length; i++){
        lengths.push(arr[i].length)
    }
    
    lengths.sort((a, b) => b - a)
    console.log(lengths[0])
}

findLongestWord(['zoom zoom', 'obscenity', 'scandles', 'refrigerator', 'abcdefghijklmnopqrstuvwxyz'])

//Time Complexity of the function addToZero is O(n)
//Space Complexity of the function addToZero is O(1)
