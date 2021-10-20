var containsDuplicate = function(nums) {
    nums.sort() ;
    let i = 0;
    while(i < nums.length-1 && nums[i] != nums[i+1]) {
    i++;
    }
    if ( i == nums.length - 1) {
    return false;
    } else {
    return true;
    }
    
    };