const nums = [2,8,11,15] , target = 9
for (let i=0; i<nums.length;i++){
    for (let j=i+1;j<nums.length;j++){
        if (nums[j]=== target-nums[i]){
            console.log(i + "\n"+ j)
            break
        }else {
            continue
        }
    }
}
