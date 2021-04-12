//In binary heap
    //->Max binary heap is where all child nodes are less than it's parent
    //-> Min binary heap is where all chile nodes are Greater than its parent
    
class BinaryHeap{
    constructor(){
        this.list = [];
    }
    add(val){
        this.list.push(val);
        if(this.list.length === 1){
            return this.list;
        }

        let cIdex = this.list.length -1;
        let pIndex = Math.floor((cIdex-1)/2);
       while(this.list[cIdex]>this.list[pIndex]){
           let temp = this.list[pIndex];
           this.list[pIndex] = this.list[cIdex];
           this.list[cIdex] = temp;  
           cIdex = pIndex;
           pIndex = Math.floor((cIdex-1)/2);
       }
    //    console.log(this.list[Math.floor((this.list.length-1)/2)]);
       return this.list;
    }
    extractMax(){
        this.list.shift();
        this.list.unshift(this.list.pop());
        
        let pIdx = 0;
        let cIdxL = (2*pIdx)+1;
        let cIdxR = (2*pIdx)+2;
        while(this.list[pIdx]<this.list[cIdxL] || this.list[pIdx]<this.list[cIdxR]){
            let temp;
           if(this.list[cIdxL] > this.list[cIdxR]){
                temp = this.list[cIdxL];
                this.list[cIdxL] = this.list[pIdx];
           }else if(this.list[cIdxL] < this.list[cIdxR]){
               temp = this.list[cIdxR];
               this.list[cIdxR] = this.list[pIdx];
           }
           this.list[pIdx] = temp;
           pIdx = cIdxL;
           cIdxL = (2*pIdx)+1;
           cIdxR = (2*pIdx)+2;
        }
        return this.list;
    }
}

let heap = new BinaryHeap();
heap.add(40);
heap.add(50);
heap.add(35);
heap.add(32);
heap.add(25);
heap.add(17);
heap.add(20);
heap.add(12);
heap.add(23)
heap.add(18)