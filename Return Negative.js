function makeNegative(num) {
    if (num > 0) {
        return (-num);
    } else {
        return num;
    }
}

 // or

function makeNegative(num) {
    return (num > 0 ) ? -num : num;
}