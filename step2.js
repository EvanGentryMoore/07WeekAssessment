//////////////////// One
function addToZero(arr){
    let trueFalseArr = []
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                trueFalseArr.push(true)
            } else {
                trueFalseArr.push(false)
            }
        }
    }
    if(trueFalseArr.includes(true)){
        console.log(true)
    } else {
        console.log(false)
    }
}

//////////////////// Two
addToZero([1, 2, 3, -2])


function hasUniqueChars(word){
    let checkedLetters = ""
    let smolChars = word.toLowerCase()
    for(let i = 0; i < smolChars.length - 1; i++){
        if(checkedLetters.includes(smolChars[i]) === false){
            checkedLetters += smolChars[i]
        } else {
            return console.log(false)
        }
    }
    console.log(true)
}

hasUniqueChars("Monday")
hasUniqueChars("Momday")
hasUniqueChars("Moonday")



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
isPanagram(`Go hang a salami, I'm a lasagna hog.`)




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




//////////////////// Extra Credit
//one: O(n)
//two: O(n)
//three: O(n)
//four: O(1)