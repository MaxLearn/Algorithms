var intersect = function(nums1, nums2) {
    let commonArray = [];
    for (let i = 0 ; i < nums1.length ; i++) {
        for(let j = 0 ; j < nums2.length ; j++){
            if (nums1[i] == nums2[j]){
                commonArray.push(nums1[i]);
                nums1.splice(i,1) ;
                nums2.splice(j,1) ;
                i--;
                j--;
            }
        }
    }
    return commonArray ;
};