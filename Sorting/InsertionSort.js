function InsertionSort(array) {
    let temp
    for (let i = 1; i < array.length; i++) {
        temp = array[i]
        for (var j = i - 1; array[j] > temp && j > -1; j--) {
            array[j + 1] = array[j]
        }
        array[j + 1] = temp

    }
    console.log(array)
    return array

}

InsertionSort([5, 3, 1, 2, 4])