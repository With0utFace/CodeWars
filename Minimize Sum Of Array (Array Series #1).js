function minSum(arr) {
    arr = arr.sort(function ( a,b ) { return a - b});
    let currentValue = 0;
    for(let i = 0; i < arr.length/2; i++)
        currentValue += arr[i] * arr[arr.length-i-1];
    return currentValue;
}