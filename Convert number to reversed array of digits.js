function digitize(n) {
    n = String(n).split('').reverse().map(Number);
    return n;
}
