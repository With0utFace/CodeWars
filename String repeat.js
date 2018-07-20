function repeatStr (n, s) {
    let temp = s;
    let i = 1;

    while (i < n) {
        s += temp;
        i++;
    }
    return s
}