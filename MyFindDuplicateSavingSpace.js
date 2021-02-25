// We have an array of integers, where:

// The integers are in the range 1..n 
// The array has a length of n + 1

// It follows that our array has at least one integer which appears at least twice. 
// But it may have several duplicates, and each duplicate may appear more than twice.
// Write a function which finds an integer that appears more than once in our array. 
// Don't modify the input! (If there are multiple duplicates, you only need to find one of them.)

function findRepeat(numbers) {

  let floor = 1;
  let ceiling = numbers.length - 1;

  while (floor < ceiling) {

    // Divide our range 1..n into an upper range and lower range
    // (such that they don't overlap)
    // lower range is floor..midpoint
    // upper range is midpoint+1..ceiling
    const midpoint = Math.floor(floor + ((ceiling - floor) / 2));
    const lowerRangeFloor = floor;
    const lowerRangeCeiling = midpoint;
    const upperRangeFloor = midpoint + 1;
    const upperRangeCeiling = ceiling;

    const distinctPossibleIntegersInLowerRange = lowerRangeCeiling - lowerRangeFloor + 1;

    // Count number of items in lower range
    let itemsInLowerRange = 0;
    numbers.forEach(item => {

      // Is it in the lower range?
      if (item >= lowerRangeFloor && item <= lowerRangeCeiling) {
        itemsInLowerRange += 1;
      }
    });

    if (itemsInLowerRange > distinctPossibleIntegersInLowerRange) {

      // There must be a duplicate in the lower range
      // so use the same approach iteratively on that range
      floor = lowerRangeFloor;
      ceiling = lowerRangeCeiling;
    } else {

      // There must be a duplicate in the upper range
      // so use the same approach iteratively on that range
      floor = upperRangeFloor;
      ceiling = upperRangeCeiling;
    }
  }

  // Floor and ceiling have converged
  // We found a number that repeats!
  return floor;
}

// Our approach is similar to a binary search, except we divide the range of possible answers in half at each step, rather than dividing the array in half.

// Complexity
// O(1) space and O(n lg n) time.