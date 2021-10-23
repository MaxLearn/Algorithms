var moveZeroes = function(nums) {
    let zeroes = 0 ;
    for (let i = 0 ; i < nums.length ; i++){
        if (nums[i] === 0) {
            nums.splice(i,1) ; 
            zeroes ++ ;
            i--;
        }
    }
    for (let j = 0 ; j < zeroes ; j++ ){
        nums.push(0);
    }
    return nums ;
};