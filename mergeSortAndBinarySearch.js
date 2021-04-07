function sortIt(a, b){
    let result = [];
    let i = 0;
    let j = 0;
    while(i<a.length && j<b.length){
        if(a[i]<= b[j]){
            result.push(a[i]);
            i++;
        }else{
            result.push(b[j]);
            j++;
        }
    }
    while(i<a.length){
        result.push(a[i]);
        i++;
    }
    while(j<b.length){
        result.push(b[j]);
        j++;
    }
    return result;
}

function mergSort(arr){
    if(arr.length<=1) return arr;
    let mid = Math.floor((arr.length)/2);
    let left = mergSort(arr.slice(0, mid));
    let right = mergSort(arr.slice(mid));
    return sortIt(left, right);
}



function binarySearch(arr, a){
    arr = mergSort(arr);
    let start = 0;
    let end = arr.length;
    let mid = Math.floor((start+end)/2);
    while(arr[mid]!==a){
        if(start>=end) return -1;
        
        if(arr[mid] > a){
            end = mid-1;
        }
        if(arr[mid]<a){
            start = mid +1;
        }
        mid = Math.floor((start+end)/2);
    }
    
    if(arr[mid] === a) return mid;
}
let a = binarySearch([55,78,5,8,46,6,14,9,11,7,25,2,10,34,12,57], 6);
