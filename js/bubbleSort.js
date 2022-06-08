var sequence = [4, 3, 5, 0, 1]
var swaps = 0
//let swapped = true

// function bubble(arr) {
//     swapped = false
//     let end = arr.length-1
//     for (let i = 0, j = 1; i < end; i++, j++) {
//         if (arr[i] > arr[j]) {
//             [arr[i], arr[j]] = [arr[j], arr[i]]
//             swapped = true
//             swaps++
//         }
//     }
// }

// do {
//     bubble(sequence)
// } while (swapped)

function bubbleSort(array) {
    const arr = array.slice();
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = 0; j < arr.length-1-i; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                swaps++;
            }
        }
    }
    return arr
}

console.log("Final result: " + bubbleSort(sequence))
console.log("Swaps: " + swaps)

