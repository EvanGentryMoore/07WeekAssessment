const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);




// How long does it take to double every number in a given 
// array? 

function appendTime(arr){// Try it with first function
    perf.start();                     // Starts timer
    doublerAppend(arr);
    let resultsAppend = perf.stop();  // Stops timer and save time results
    return resultsAppend.preciseWords
}

function insertTime(arr){// Try it with second function
    perf.start();
    doublerInsert(arr);
    let resultsInsert = perf.stop();
    return resultsInsert.preciseWords
}


function Times(doublerAppend, doublerInsert){
    this.doublerAppend = doublerAppend;
    this.doublerInsert = doublerInsert;
}

let arrs = {};
    arrs.tiny_10 = new Times(appendTime(tinyArray), insertTime(tinyArray))
    arrs.small_100 = new Times(appendTime(smallArray), insertTime(smallArray))
    arrs.medium_1000 = new Times(appendTime(mediumArray), insertTime(mediumArray))
    arrs.large_10000 = new Times(appendTime(largeArray), insertTime(largeArray))
    arrs.xlarge_100000 = new Times(appendTime(extraLargeArray), insertTime(extraLargeArray))

console.table(arrs)

//////////////////////////////////////////////////////////////////
/*
By the times in the table down in the terminal, we can see that while at shorter array lengths that doublerInsert seems to be faster, it doesn't take much scaling of an array's size to make it the slower function. DoublerAppend's times appear to be more linear (10n so O(n)) than those of doublerInsert's (10^n so O(n^2)), which obviously means that DoublerAppend scales better than DoublerInsert.

I suspect the reason for this is the difference between .push and .unshift. They may seem to perform basically the same task, however, the subtle logistics of their execution is very important. While they both insert a value into an array, .push places that value at the end of an array, so the processor only has to process the one new position. On the other hand, .unshift places the new value at the beginning of the array, meaning that the processor now has to process the new position of every value that was in the array previously. At larger array sizes, .unshift can be very taxing on the processor, especially when compared to .push.
*/
