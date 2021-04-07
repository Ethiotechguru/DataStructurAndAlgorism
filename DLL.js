class DLL{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    push(val){//add to DLL at the end of the list
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            this.size++;
            return this;
        }
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.size++;
        return this;
        //Big O notation for adding from the end of the DLL is constant time O(1)
    }
    pop(){//remove from the end of DLL
        if(!this.head){
            return null;
        }
        if(this.head === this.tail){
            let temp = this.head;
            this.head = null;
            this.tail = null;
            this.size--;
            return temp;
        }
        let temp = this.tail;
         this.tail = this.tail.prev;
         this.tail.next = null;
         this.size--;
         return this;
         //Big O notation for removing from the end of the DLL is constant time O(1)
    }
    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            this.size++;
            return this;
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.size++;
        return this;
        //Big O notation for adding to the beginning of the DLL is constant time O(1)
    }
    shift(){//remove from the beginning of the DLL
        if(!this.head){
            return null;
        }
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
            this.size--;
            return this;
        }
        this.head = this.head.next;
        this.head.prev = null;
        this.size--;
        return this;
        //Big O notation for removing from the beginning of the DLL is constant time O(1)
    }
    set(i, val){
        if(!this.head || i === this.size) return this.push(val);
        if(i === 0) return this.unshift(val);
        if(i>this.size || i<0) return false;
        let newNode = new Node(val);
        let count = i<=Math.floor(this.size/2)?0:this.size-1;
        let current = i<=Math.floor(this.size/2)?this.head:this.tail;
        if(i<=Math.floor(this.size/2)){
            while(count !== i){
                count++;
                current = current.next;
            }
            current.prev.next = newNode;
            newNode.prev = current.prev;
            newNode.next = current;
            current.prev = newNode;
        }else{
            while(i!== count){
                count--;
                current = current.prev;
            }
            current.prev.next = newNode;
            newNode.prev = current.prev;
            newNode.next = current;
            current.prev = newNode;
        }
        this.size++;
        return this;
        //DLL Big O notation for inserting at index i is O(n/2) hence O(n)
    }

    get(i){
        if(!this.head) return null;
        if(i<0 || i>this.size-1) return false;
        let count = i<=Math.floor(this.size/2)?0:this.size-1;
        let current = i<=Math.floor(this.size/2)?this.head:this.tail;
        if(i<=Math.floor(this.size/2)){
            while(i != count){
                count++;
                current = current.next;
            }
            console.log("if block is running");
        }else{
            while(i != count){
                count--;
                current = current.prev;
            }
            console.log("else block is running");
        }
        return current;
        //DLL Big O notation for searching Node at index i is O(n/2) hence O(n)
    }
}

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

let list = new DLL();
list.push(10);
list.push(20);
list.push(30);
list.push(50);
