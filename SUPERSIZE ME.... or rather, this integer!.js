function superSize(num){
    return parseInt(num.toString().split('').sort().reverse().join(''))
}