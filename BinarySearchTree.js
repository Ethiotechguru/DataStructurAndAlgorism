class BST{
    constructor(){
        this.root = null;
    }

    add(val){
        let newNode = new Node(val);
        
        if(!this.root){
            this.root = newNode;
        }else{
            let current = this.root;
            while(current.val){
                if(current.val === val) return 'Duplicated items';
                if(val<current.val){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    }else{
                        current = current.left;
                    }
                }else if(val>current.val){
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    }else{
                        current = current.right;
                    }
                }
                
            }
        }
    }
    find(val){
        if(!this.root) return null;
        let current = this.root;
        while(current.val !== val){
            if(val <current.val){
                current = current.left;
            }else if(val >current.val){
                current = current.right;
            }
            else{
                return -1;
            }
        }
        if(current.val == val){
            return current;
        }else{
            return -1;
        }
    }
}


class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let tree = new BST();

tree.add(20);
tree.add(30);
tree.add(25);
tree.add(18);
tree.add(15);
tree.add(10);