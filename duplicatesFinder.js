function hasDuplicates(arr) {
    var counts = [];

    for (var i = 0; i <= arr.length; i++) {
        if (counts[arr[i]] === undefined) {
            counts[arr[i]] = 1;
        } else {
            return true;
        }
    }
    return false;
}

// [...]

var arr = [1, 1, 2, 3, 4];

if (hasDuplicates(arr)) {
  alert('Error: you have duplicates values !')
}
