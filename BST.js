//Binary Search Tree is a sorted Data structure where the parent Node can only have Two children
//the left childe is less than the parent Node and the right childe is greater than the parent Node
class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }
    add(val){
        let newNode = new Node(val);
        if(!this.root){
            this.root = newNode;
            return this;
        }else{
            let current = this.root;
            while(true){
                if(val === current.val){
                    return "duplicate is not allowed!";
                }
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
        let found = false;
        while(current && !found){
            if(val<current.val){
                current = current.left;
            }else if(val>current.val){
                current = current.right;
            }else{
                found = true;
            }
        }
        if(found) return current;
        return false;
    }
    //The Big O notation of either searching or inserting in BST is O(log n) for Best case
    //if the BST is One sided tree it can be O(n) worst case
}

let tree = new BST();