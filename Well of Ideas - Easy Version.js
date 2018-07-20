function well(x){
    let count = 0;
    for (let i = 0; i < x.length; i++) {
        if (x[i] === 'good') {
            count++;
        }
    }

    return count > 2 ? 'I smell a series!' : count >= 1 ? 'Publish!' : 'Fail!';
}
