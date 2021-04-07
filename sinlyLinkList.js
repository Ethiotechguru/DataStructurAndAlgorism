class SLL{
    constructor(){
        this.head = null; //head:{val:x, next:}
        this.tail = null;
        this.size = 0;
    }

    push(val){//add at the end of the list;
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
        return this;
        //singlyLinkList Big(O) notation of adding to the end is O(1) constant time
    }
    pop(){//remove from the end of the list
        if(!this.head){
            return null;
        }
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
            this.size--;
            return this;
        }
        let temp = null;
        let current = this.head;
        while(current.next){
            temp = current;
            current = current.next;
        }
        this.tail = temp;
        this.tail.next = null;
        this.size--;
        return this;
        //singlyLinkList Big(O) notation of removing from the end is O(n)
    }
    unshift(val){//add at the beginning of the list
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            let current = this.head;
            this.head = newNode;
            this.head.next = current;
        }
        this.size++;
        return this;
        //singlyLinkList Big(O) notation of adding to the beginning is O(1) constant time
    }
    shift(){
        if(!this.head) return null;
        if(this.head === this.tail){
            this.head = null; this.tail = null;
            this.size--;
            return this;
        }
        this.head = this.head.next;
        this.size--;
        return this;
        //singlyLinkList Big(O) notation of removing from the beginning is O(1) constant time
    }
    get(i){//get the list at index i;
        let current = this.head;
        let count = 0;
        while(i !== count){
            count++;
            current = current.next;
            if(count>=this.size){
                return null;
            }
        }
        return current;
        //singlyLinkList Big(O) notation of searching item at any possession is O(n)
    }
    set(i, val){//add new Node to the list at specified index i
        if(i === 0) return this.unshift(val);
        if(i === this.size) return this.push(val);
        if(i<0) return 'index should be either 0 or a positive number';

        let newNode = new Node(val);
        let temp = null;
        let current = this.head;
        let count = 0;
        while(i !== count){
            count++;
            temp = current;
            current = current.next;
            if(count>=this.size){
                return null;
            }
        }
        temp.next = newNode;
        newNode.next = current;
        this.size++;
        return this;
        //singlyLinkList Big(O) notation of inserting item at any possession is O(n)
    }
}


class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
let list = new SLL();
list.push(10);
list.push(20);
list.push(30);
list.push(40);