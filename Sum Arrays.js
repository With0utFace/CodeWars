function sum (numbers) {
    let newArray = [];
    let counter = 0;
    "use strict";
    newArray = numbers.forEach(function(elem ) {
        counter += elem });
    return counter;
}
