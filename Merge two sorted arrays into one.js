function mergeArrays(arr1, arr2) {
    let result = arr1.concat(arr2);
    result = result.sort(function (a, b) {  return a - b;  });

    for (let i = 0; i < result.length; i++) {

        for (let j = i + 1; j < result.length;) {

            if (result[i] == result[j]) {

                result.splice(j, 1);

            } else {
                j++;
            }
        }
    }
    return result;
}