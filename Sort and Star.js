function twoSort(s) {
    return s.sort().slice(0,1)
        [0].split("").reduce((x,y)=>x + "***" + y);
}