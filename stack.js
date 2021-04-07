class Stack{//FILO Or LIFO
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    unshift(val){
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
            this.size++;
            return this;
        }
        let current = this.first;
        this.first = newNode;
        newNode.next = current;
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
    //The Big O notation of adding to and removing from Stack is O(1) constant time
}

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


let stack = new Stack();