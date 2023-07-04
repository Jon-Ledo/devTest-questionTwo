export function findOutlier(integers: number[]): number {
  // helper functions
  const findOdd = (num: number) => num % 2 !== 0
  const findEven = (num: number) => num % 2 === 0

  // check if array length 3+
  if (integers.length < 3) {
    console.log('Array length should be at least 3')
    return 0
  }

  // check if array has mostly even or odd numbers
  const filtered = integers.filter((index) => index % 2 === 0)

  // mostly even array
  if (filtered.length > 1) {
    // find the odd number outlier
    for (const num of integers) {
      if (findOdd(num)) {
        return num
      }
    }
  } else {
    // find the even number outlier
    for (const num of integers) {
      if (findEven(num)) {
        return num
      }
    }
  }

  // default if no outlier can be found
  return 0
}
