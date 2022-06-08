sequence = [4, 3, 5, 0, 1]
sequence = [5, 4, 3, 1, 0]

def bubble_sort(arr, swaps = 0):
    iter_swaps = 0
    for i in range(1, len(arr)):
        current, previous = arr[i], arr[i-1]
        if previous > current:
            arr[i], arr[i-1] = previous, current
            iter_swaps += 1
            swaps += 1
    if iter_swaps == 0:
        print(f"Final result: {arr}")
        print(f"Swaps: {swaps}")
        return arr, swaps
    bubble_sort(arr, swaps)

bubble_sort(sequence)