var findMaxConsecutiveOnes = function(nums) {
    let max = 0
    let current = 0;
    
    for (let num of nums) {
        if (!num) current = 0;
        
        max = Math.max(max, current += num);
    }
    
    return max;
};