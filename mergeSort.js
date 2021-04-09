function merge(left, right){
    // let arr1 = arr.slice(0, Math.floor(arr.length/2));
    // let arr2 = arr.slice(Math.floor(arr.length/2));
    let result = [];
    while(left.length && right.length){
        if(left[0]<right[0]){
            console.log(result, left, right, 'form if block');
            result.push(left.shift());
            //sort([34,67,3,5,89,65,12,32,17,15,13]);
        }else{
            console.log(result, left, right, 'form else block');
            result.push(right.shift());
        }
    }
    console.log([...result, ...left,...right], 'is result');
    return [...result, ...left, ...right];
}

let merged;
function sort(arr){
    if(arr.length==1)return arr;
    const half = arr.length/2;
    let left = arr.splice(0, half);
    // console.log(merge(sort(left), sort(arr)), 'is merged elements');
    return merge(sort(left), sort(arr));
}

sort([34,67,3,5,89,65,12,32,17,15,13]);

/********* Breaking it Down***********/
//THE GIVEN ARRAY
//[34,67,3,5,89,65,12,32,17,15,13]

        //first Spice                                        //second Splice
        //[34,  67,  3,   5,  89],                           [65,  12,  32,  17, 15, 13]

//first>first Splice           
//[34,67]   

//first>first>first splice
//[34],[67]             
                        //first>second splice            second>first splice            
                        //[3,5,89]                       [65,12,32],    
                                     
                        //first>second>second Splice      
                          //[3][5,89]                   //second>first>first splice
                                                        //[65][12,32]    |             
                        //first>second>third Splice       second>first>second splice
                      //[5],[89]                         [12],[32]  |                  
                      //[3][5,89]                       [65][12,32]                   
                                                                                    //second>second>first splice
                                                                                    //[17,15,13]
                                                                                    //second>second>second splice
                                                                                    //[17][15,13]
                                                                                    //second>second>third splice
                                                                                    //[15][13]
                                                                                    //[17] [13,15]

                                // result=[12,13,15,17],[32,65]      []
//[34,67]    [3,5,89] 
//returnValue = [3,5,34,67,89]            returnValue = [12,13,15,17,32,65]

//result = [] left = [], right = []
//returnValue = [3,5,12,13,15,17,32,34,65,67,89]