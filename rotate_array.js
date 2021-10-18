var rotate = function(nums, k) {
	let rotatedArray = [] ;
	for ( let i = 0 ; i < nums.length ; i++) {
rotatedArray[(i+k)%(nums.length)] = nums[i] ;
}
for  (let f = 0 ; f < nums.length ; f++) {
	nums[f] = rotatedArray[f] ;
}
return nums;
};