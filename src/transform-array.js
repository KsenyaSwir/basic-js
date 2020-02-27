module.exports = function transform( arr ) {
    //throw 'Not implemented';
    // remove line with error and write your code here
    if (!Array.isArray(arr)) throw new Error();

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "--discard-next") {
            i++;
        } else if (arr[i] == "--discard-prev") {
            newArr.pop();
        } else if (arr[i] == "--double-next" && i + 1 != arr.length) {
            newArr.push(arr[i + 1]);
        } else if (arr[i] == "--double-prev" && i - 1 > 0) {
            newArr.push(arr[i - 1]);
        } else if (arr[i] != "--discard-prev" && arr[i] != "--double-prev" && arr[i] != "--double-next" && arr[i] != "--discard-next") {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};
