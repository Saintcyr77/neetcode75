function containsDuplicate(nums: number[]): boolean {
    let set = new Set<number>();
    
    for(let i: number =0;i<nums.length;i++){
        if(set.has(nums[i])) return true;
        
        set.add(nums[i]);
    }
    
    return false;
};

containsDuplicate([1,2,3,1])