var twoSum = function(nums, target) {
    let arrayTwo = [] ;
        for ( let i = 0 ; i < nums.length-1 ; i++) {
            for ( let j = i + 1 ; j < nums.length ; j++) {
                if (target - nums[i] - nums[j] === 0) {
                    arrayTwo[0] = i ;
                    arrayTwo[1] = j ;
                    return arrayTwo ;
                }
            }
        }
    };