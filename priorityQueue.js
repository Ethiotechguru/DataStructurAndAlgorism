class PriorityQueue{
    constructor(){
        this.list = [];
    }
    add(val, p){
        let newNode = new Node(val, p);
        this.list.push(newNode);
        let cIdx = this.list.length-1;
        while(cIdx>0){
            let pIdx = Math.floor((cIdx-1)/2);
            if(this.list[cIdx].p >= this.list[pIdx].p) break;
            let temp = this.list[pIdx];
            this.list[pIdx] = this.list[cIdx];
            this.list[cIdx] = temp;
            cIdx = pIdx;
        }
        return this.list;
    }
    removeHighestPQ(){
        let firstEl = this.list.pop();
        if(this.list.length){
            this.list[0] = firstEl;
        }
        let pIdx = 0;
        while(true){
            let list = this.list;
            let temp;
            let lCIdx = (2*pIdx)+1;
            let rCIdx = (2*pIdx)+2;
            let swap = null;
            if(lCIdx>=list.length) return this.list;
            if(list[rCIdx] && (list[rCIdx].p<list[lCIdx].p&&list[rCIdx].p<list[pIdx].p)){
                    swap = rCIdx;
            }
            else if(list[lCIdx].p <list[pIdx].p){
                swap = lCIdx;
            }else{
                break;
            }
                temp = this.list[pIdx];
                this.list[pIdx] = this.list[swap];
                this.list[swap] = temp;
                pIdx = lCIdx; 
        }
        return this.list;
    }
    
}

class Node{
    constructor(val, p){
        this.val =val;
        this.p = p;
    }
}
let pq = new PriorityQueue();
pq.add('sam',7);
pq.add('lidet',3);
pq.add('me',1);
pq.add('naty',4);
pq.add('mita',2);

