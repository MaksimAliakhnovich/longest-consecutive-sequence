module.exports = function longestConsecutiveLength(array) {
    let sortArr = new Set();
    let tmpArray = array;
    const longestConsecutive = [0];

    tmpArray.sort((x, y) => x - y);

    tmpArray.forEach((x, y) => {
        if (x + 1 == tmpArray[y + 1] || x == tmpArray[y + 1]) {
            sortArr.add(x);
        } else {
            sortArr.add(x);
            longestConsecutive.push(sortArr.size);
            sortArr.clear();
        }
    })
    return Math.max.apply(Math, longestConsecutive);
}