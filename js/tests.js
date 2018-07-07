/* Fake Binary */

function fakeBin(x){
    var input = x.split("");

    for( var i=0;i<input.length;i++){
        if(input[i] < 5) {
            input[i] = "0";
        }
        else if(input[i] >= 5) {
            input[i] = "1";
        }
    }
    return input.join("");
}

/* Abbreviate a Two Word Name */

function abbrevName(name){

    nameArray = name.split(" ");

    return nameArray[0].charAt(0).toUpperCase() + "." + nameArray[1].charAt(0).toUpperCase();
}

/* Sum of positive */


function positiveSum(arr) {
    let sum = 0;

    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] > 0 ) {
            sum += parseInt( arr[i] )
        }
    }
    return sum;
}

/* Convert a string to an array */

function stringToArray(string){

    return string.split(", ");

}

/* A Needle in the Haystack */

function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
}

/* Remove String Spaces */

function noSpace(x){
    var result = x.split(" ");
    return result.join('');
}

/* Convert number to reversed array of digits */

function digitize(n) {
    n = String(n).split('').reverse().map(Number);
    return n;
}

/* Merge two sorted arrays into one */

function mergeArrays(arr1, arr2) {
    let result = arr1.concat(arr2);
    result = result.sort(function (a, b) {  return a - b;  });

    for (var i = 0; i < result.length; i++) {

        for (var j = i + 1; j < result.length;) {

            if (result[i] == result[j]) {

                result.splice(j, 1);

            } else {
                j++;
            }
        }
    }
    return result;
}

/* Beginner - Lost Without a Map */

function maps(x){
    var result = x.map(function(num) {
        return num * 2;
    });
    return result;
}

/* Sum Arrays */

function sum (numbers) {
    var newArray = [];
    var counter = 0;
    "use strict";
    newArray = numbers.forEach(function(elem ) {
        counter += elem });
    return counter;
};

/* noobCode 01: SUPERSIZE ME.... or rather, this integer! */

function superSize(num){
    return parseInt(num.toString().split('').sort().reverse().join(''))
}

/* Sum Mixed Array */

function sumMix(x){
    return x.reduce((sum,value) => sum + parseInt(value),0);
}

/* Well of Ideas - Easy Version */

function well(x){
    let count = 0;
    for (let i = 0; i < x.length; i++) {
        if (x[i] === 'good') {
            count++;
        }
    }

    return count > 2 ? 'I smell a series!' : count >= 1 ? 'Publish!' : 'Fail!';
}

/* I love you, a little , a lot, passionately ... not at all */

function howMuchILoveYou(nbPetals) {
    if (nbPetals % 6 == 1) {
        return "I love you"

    }else if (nbPetals % 6 ==  2){
        return "a little"
    }else if (nbPetals % 6 ==  3){
        return "a lot"
    } else if (nbPetals % 6 ==  4){
        return "passionately"
    }else if (nbPetals % 6 ==  5){
        return "madly"
    } else{
        return "not at all"
    }
}
