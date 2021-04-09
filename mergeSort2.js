function merge(left, right){
    let result = [];
    while(left.length && right.length){
        if(left[0]<right[0]){
            result.push(...left.splice(0,1));
        }else{
            result.push(...right.splice(0,1));
        }
    }
    console.log([...result, ...left, ...right]);
    return [...result, ...left, ...right];
}
function sort(arr){
    if(arr.length < 2) return arr;
    let half =arr.length/2;
    let left = arr.splice(0,half);
    return merge(sort(left), sort(arr));
}
sort([34,67,3,5,89,65,12,32,17,15,13]);
// sort([7,67,1,4,5,6,3]);