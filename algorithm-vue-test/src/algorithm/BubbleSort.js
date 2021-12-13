import { swap } from '@/utils'
export default function bubbleSort(arr) {
  let i = 0
  while (i < arr.length) {
    let lastSwappedIndex = -1
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        swap(arr, j, j + 1)
        lastSwappedIndex = j + 1
      }
    }
    i += arr.length - lastSwappedIndex
  }
}
