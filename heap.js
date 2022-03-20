class Heap {
  constructor(isMinHeap = false) {
    this.isMinHeap = isMinHeap;
    // heap[0] will hold the heap size
    // nodes will be 1-index based
    this.heap = [0];
  }

  push(value) {
    const lastIndex = this.heap[0];
    this.heap[lastIndex + 1] = value;
    this.heap[0]++;

    this.reorderHeapBottomUp();
  }

  pop() {
    if (this.size() === 0) {
      throw new Error('Cannot pop on an empty heap');
    }


    const lastIndex = this.heap[0];
    const toReturn = this.heap[1]
    this.heap[1] = this.heap[lastIndex]
    delete this.heap[lastIndex]
    this.heap[0]--


    this.reorderHeapTopDown()

    return toReturn;
  }

  compare(val1, val2) {
    if (this.isMinHeap) {
      return val1 > val2
    } else {
      return val1 < val2
    }
  }

  reorderHeapTopDown() {
    let currentIndex = 1;
    let leftChildIndex = currentIndex * 2
    const currentSize = this.size()

    while (leftChildIndex <= currentSize) {
      const rightChildIndex = currentIndex * 2 + 1

      if (this.compare(this.heap[currentIndex], this.heap[leftChildIndex])) {
        const tmp = this.heap[currentIndex]
        const hasRightChild = rightChildIndex <= currentSize
        const childIndexToReplace =
          hasRightChild && this.compare(this.heap[leftChildIndex], this.heap[rightChildIndex])
            ? rightChildIndex
            : leftChildIndex

        this.heap[currentIndex] = this.heap[childIndexToReplace]
        this.heap[childIndexToReplace] = tmp
        currentIndex = childIndexToReplace
        leftChildIndex = currentIndex * 2
      } else {
        break
      }
    }
  }
  reorderHeapBottomUp() {
    let currentIndex = this.heap[0]

    while (currentIndex > 1) {
      const parentIndex = Math.floor(currentIndex / 2)
      if (this.compare(this.heap[parentIndex], this.heap[currentIndex], this.isMinHeap)) {
        let tmp = this.heap[parentIndex]
        this.heap[parentIndex] = this.heap[currentIndex]
        this.heap[currentIndex] = tmp;
        currentIndex = parentIndex
      } else {
        break;
      }
    }
  }

  print() {
    return this.heap.slice(1, this.size() + 1)
  }

  size() {
    return this.heap[0]
  }
}

module.exports = Heap;