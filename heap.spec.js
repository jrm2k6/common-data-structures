const Heap = require('./heap')

describe('Min-heap insertion', () => {
    const h = new Heap(true)

    it('can insert a root element', () => {
        h.push(10)

        expect(h.print()).toEqual([10])
        expect(h.size()).toEqual(1)
    })

    it('keeps the min-heap properties correct when inserting a greater element', () => {
        h.push(11)
        expect(h.print()).toEqual([10, 11])
        expect(h.size()).toEqual(2)
    })

    it('keeps the min-heap properties correct when inserting a smaller element', () => {
        h.push(9)
        expect(h.print()).toEqual([9, 11, 10])
        expect(h.size()).toEqual(3)
    })

    it('keeps the min-heap properties correct when inserting a lot of elements', () => {
        h.push(12)
        h.push(8)
        h.push(20)
        h.push(22)
        h.push(1)
        expect(h.print()).toEqual([1, 8, 10, 9, 11, 20, 22, 12])
        expect(h.size()).toEqual(8)
    })
})

describe('Min-heap deletion', () => {
    const h = new Heap(true)
    h.push(2)
    h.push(4)
    h.push(3)
    h.push(12)

    it('has min-heap properties', () => {
        expect(h.print()).toEqual([2, 4, 3, 12])
        expect(h.size()).toEqual(4)
    })

    it('returns minimum element', () => {
        const min = h.pop()
        expect(min).toEqual(2)
        expect(h.size()).toEqual(3)
        expect(h.print()).toEqual([3, 4, 12])
    })

    it('returns minimum element', () => {
        const min = h.pop()
        expect(min).toEqual(3)
        expect(h.size()).toEqual(2)
        expect(h.print()).toEqual([4, 12])
    })

    it('returns minimum element', () => {
        const min = h.pop()
        expect(min).toEqual(4)
        expect(h.size()).toEqual(1)
        expect(h.print()).toEqual([12])
    })

    it('returns minimum element', () => {
        const min = h.pop()
        expect(min).toEqual(12)
        expect(h.size()).toEqual(0)
        expect(h.print()).toEqual([])
    })

    it('throws error when popping elements on empty heap', () => {
        const f = () => {
            h.pop()
        }
        expect(f).toThrow(new Error('Cannot pop on an empty heap'))
    })
})

describe('Min-heap', () => {
    const h = new Heap(true)

    it('has min-heap properties', () => {
        h.push(2)
        expect(h.print()).toEqual([2])

        h.push(4)
        expect(h.print()).toEqual([2, 4])

        h.push(3)
        expect(h.print()).toEqual([2, 4, 3])

        h.push(12)
        expect(h.print()).toEqual([2, 4, 3, 12])

        h.pop()
        expect(h.print()).toEqual([3, 4, 12])

        h.push(1)
        expect(h.print()).toEqual([1, 3, 12, 4])

        h.push(20)
        expect(h.print()).toEqual([1, 3, 12, 4, 20])

        h.push(2)
        expect(h.print()).toEqual([1, 3, 2, 4, 20, 12])

        h.push(6)
        expect(h.print()).toEqual([1, 3, 2, 4, 20, 12, 6])

        h.push(5)
        expect(h.print()).toEqual([1, 3, 2, 4, 20, 12, 6, 5])

        h.pop()
        expect(h.print()).toEqual([2, 3, 5, 4, 20, 12, 6])

        h.pop()
        expect(h.print()).toEqual([3, 4, 5, 6, 20, 12])

        h.pop()
        expect(h.print()).toEqual([4, 6, 5, 12, 20])

        h.pop()
        expect(h.print()).toEqual([5, 6, 20, 12])

        h.pop()
        expect(h.print()).toEqual([6, 12, 20])

        h.pop()
        expect(h.print()).toEqual([12, 20])

        h.pop()
        expect(h.print()).toEqual([20])

        h.pop()
        expect(h.print()).toEqual([])

    })
})

describe('Max-heap insertion', () => {
    const h = new Heap()

    it('can insert a root element', () => {
        h.push(10)

        expect(h.print()).toEqual([10])
        expect(h.size()).toEqual(1)
    })

    it('keeps the max-heap properties correct when inserting a smaller element', () => {
        h.push(9)
        expect(h.print()).toEqual([10, 9])
        expect(h.size()).toEqual(2)
    })

    it('keeps the max-heap properties correct when inserting a greater element', () => {
        h.push(11)
        expect(h.print()).toEqual([11, 9, 10])
        expect(h.size()).toEqual(3)
    })

    it('keeps the max-heap properties correct when inserting a lot of elements', () => {
        h.push(12)
        h.push(8)
        h.push(20)
        h.push(22)
        h.push(1)
        expect(h.print()).toEqual([22, 11, 20, 9, 8, 10, 12, 1])
        expect(h.size()).toEqual(8)
    })
})

describe('Max-heap deletion', () => {
    const h = new Heap()
    h.push(2)
    h.push(4)
    h.push(3)
    h.push(12)

    it('has max-heap properties', () => {
        expect(h.print()).toEqual([12, 4, 3, 2])
        expect(h.size()).toEqual(4)
    })

    it('returns minimum element', () => {
        const min = h.pop()
        expect(min).toEqual(12)
        expect(h.size()).toEqual(3)
        expect(h.print()).toEqual([4, 2, 3])
    })

    it('returns minimum element', () => {
        const min = h.pop()
        expect(min).toEqual(4)
        expect(h.size()).toEqual(2)
        expect(h.print()).toEqual([3, 2])
    })

    it('returns minimum element', () => {
        const min = h.pop()
        expect(min).toEqual(3)
        expect(h.size()).toEqual(1)
        expect(h.print()).toEqual([2])
    })

    it('returns minimum element', () => {
        const min = h.pop()
        expect(min).toEqual(2)
        expect(h.size()).toEqual(0)
        expect(h.print()).toEqual([])
    })

    it('throws error when popping elements on empty heap', () => {
        const f = () => {
            h.pop()
        }
        expect(f).toThrow(new Error('Cannot pop on an empty heap'))
    })
})

describe('max-heap', () => {
    const h = new Heap()

    it('has max-heap properties', () => {
        h.push(2)
        expect(h.print()).toEqual([2])

        h.push(4)
        expect(h.print()).toEqual([4, 2])

        h.push(3)
        expect(h.print()).toEqual([4, 2, 3])

        h.push(12)
        expect(h.print()).toEqual([12, 4, 3, 2])

        h.pop()
        expect(h.print()).toEqual([4, 2, 3])

        h.push(1)
        expect(h.print()).toEqual([4, 2, 3, 1])

        h.push(20)
        expect(h.print()).toEqual([20, 4, 3, 1, 2])

        h.push(14)
        expect(h.print()).toEqual([20, 4, 14, 1, 2, 3])

        h.push(6)
        expect(h.print()).toEqual([20, 4, 14, 1, 2, 3, 6])

        h.push(5)
        expect(h.print()).toEqual([20, 5, 14, 4, 2, 3, 6, 1])

        h.pop()
        expect(h.print()).toEqual([14, 5, 6, 4, 2, 3, 1])

        h.pop()
        expect(h.print()).toEqual([6, 5, 3, 4, 2, 1])

        h.pop()
        expect(h.print()).toEqual([5, 4, 3, 1, 2])

        h.pop()
        expect(h.print()).toEqual([4, 2, 3, 1])

        h.pop()
        expect(h.print()).toEqual([3, 2, 1])

        h.pop()
        expect(h.print()).toEqual([2, 1])

        h.pop()
        expect(h.print()).toEqual([1])

        h.pop()
        expect(h.print()).toEqual([])

    })
})