class Queue{//FIFO or LILO
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last =newNode;
            this.size++;
            return this;
        }
        this.last.next = newNode;
        this.last = newNode;
        this.size++;
        return this;
    }
    shift(){
        if(!this.first) return null;
        if(this.first === this.last){
            this.first = null;
            this.last = null;
            this.size--;
            return this;
        }
        this.first = this.first.next;
        this.size--;
        return this;
    }
    //The Big O notation for Both removing from and adding to queue is O(1) constant time
}


class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

let q = new Queue();