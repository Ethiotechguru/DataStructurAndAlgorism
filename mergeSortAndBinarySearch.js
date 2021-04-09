function sortIt(a, b){
    let result = [];

    while(a.length && b.length){
        if(a[0]<= b[0]){
            result.push(a.shift());
        }else{
            result.push(b.shift());
        }
    }
    // if(a.length){
    //     result.push(...a);
    // }else{
    //     result.push(...b);
    // }
    // console.log(result);
    // return result;
    console.log([...result, ...a, ...b]);
    return [...result, ...a, ...b];
}

function mergeSort(arr){
    if(arr.length<2) return arr;
    let mid = Math.floor((arr.length)/2);
    let left = arr.splice(0,mid);
    let merged = sortIt(mergeSort(left), mergeSort(arr));
    return merged;
}



function binarySearch(arr, a){
    // arr = mergeSort(arr);
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
//**Sorting Merging and Searching */
// let a = binarySearch(mergeSort([55,78,5,8,46,6,14,9,11,7,25,2,10,34,12,57]), 14);

//***Sorting and Merging an Array Recursively */
// mergeSort([55,78,5,8,46,6,14,9,11,7,25,2,10,34,12,57,1]);


//***Merging Two Sorted Array */

//res:[1,2,3,4,5,6,7, 8,9,10,11,12,14,25, 34,46,55,57,67,78]
//sortIt([3,4, 5,11, 12, 14, 57, 78], [1, 2, 6, 7, 8, 9, 10,25, 34, 46, 55,67,90]);
//a:[     ], b:[       90]

//return [...res, ...a, ...b]