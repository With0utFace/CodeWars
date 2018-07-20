function fakeBin(x){
    let input = x.split("");

    for( let i=0;i<input.length;i++){
        if(input[i] < 5) {
            input[i] = "0";
        }
        else if(input[i] >= 5) {
            input[i] = "1";
        }
    }
    return input.join("");
}