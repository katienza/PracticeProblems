const maxProduct = nums => {
  let max = nums[0];
  let product = 1;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      product = 1;
      max = Math.max(max, 0);
    } else {
      product = product * nums[i];
      max = Math.max(max, product);
    }
  }
  
  max = Math.max(max, nums[nums.length - 1])
  product = 1;
  
  for (let j = nums.length - 1; j >= 0; j--) {
    if (nums[j] === 0) {
      product = 1;
      max = Math.max(max, 0);
    } else {
      product = product * nums[j];
      max = Math.max(max, product);
    }
  }
 
  return max
}