//Implementing Parent Child relationship in an array
// function PCR(arr){
// //     let arr = [2,3,5,6,7,8];

//     for(let i in arr){
//         let left = Math.floor((2*i)+1);
//         let right = Math.floor((2*i)+2);
        
//         if(left>=arr.length){
//             return 'DONE'
//         }else{
//             if(arr[right] && arr[left]){
//                 console.log('parent', arr[i])
//                 console.log('children', arr[left], arr[right])
//             }else{
//                 console.log('parent', arr[i])
//                 console.log('child', arr[left])
//             }
//         }
//     }
// }
// PCR([10,15,17,19,11,34,54,65,67,70,80]);
// //parent 10
// //children 15,17
// //parent 15
// //children 19,11
// //parent 17
// //children 34,54
// //parent 19
// //children 65,67
// //parent 11
// //children 70,80
// //DONE

class MaxBinaryHeap{
    //In binary heap
    //->Max binary heap is where all child nodes are less than it's parent
    //-> Min binary heap is where all chile nodes are Greater than its parent
    constructor(){
        this.list = [];
    }

    add(val){
        this.list.push(val);
        let cIdx = this.list.length-1;
        let temp;
        while(cIdx>0){
            let pIdx = Math.floor((cIdx-1)/2);
            if(this.list[cIdx]<=this.list[pIdx]) break;
            temp = this.list[pIdx];
            this.list[pIdx] = this.list[cIdx];
            this.list[cIdx] = temp;
            cIdx = pIdx;
        }
        return this.list;
    }

    removeMax(){
        let last = this.list.pop();
        if(this.list.length) this.list[0] = last;
        let pIdx = 0;
        while(true){
            let lCIdx = (2*pIdx)+1;
            let rCIdx = lCIdx+1;
            let temp;
            if(this.list[rCIdx]>this.list[lCIdx] &&
                this.list[rCIdx]>this.list[pIdx]
            ){
                temp = this.list[pIdx];
                this.list[pIdx] = this.list[rCIdx];
                this.list[rCIdx] = temp;
                pIdx = lCIdx;
            }
            else if(this.list[lCIdx]>this.list[pIdx]){
                temp = this.list[pIdx];
                this.list[pIdx] = this.list[lCIdx];
                this.list[lCIdx] = temp;
                pIdx = lCIdx;
            }else{
                break;
            }
        }
        return this.list;
    }
}

let heap= new MaxBinaryHeap();
heap.add(45);
heap.add(29);
heap.add(25);
heap.add(24);
heap.add(23);
//[45, 29, 25, 22, 23]
    //[23,29, 25, 22] swap
    //[29,23, 25, 22] bubble Down
        //[22,23, 25] swap
        //[25,23, 22] bubble Down
            //[22,23] swap
            //[23,22] bubble Down
                //[22] 
                    //[]