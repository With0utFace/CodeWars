function GetSum( a,b ){
    let result;
    let firstNumber;
    let secondNumber;
    let index;

    if ( a == b ) { return a;}
    else if ( a > b ) {
        firstNumber = b;
        secondNumber = a;
    } else {
        firstNumber = a;
        secondNumber = b;
    }
    index = 0;
    myArray = [];
    for (var i = firstNumber; i <= secondNumber; i++) {
        myArray[index] = i;
        index++;
    }

    let sum = 0;
    for (var i = 0; i < myArray.length; i++) {
        sum += myArray[i];
    }

    return sum;
}