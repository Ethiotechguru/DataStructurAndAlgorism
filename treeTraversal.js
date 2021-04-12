//Two ways of Traversing a Tree
        //-> Breadth-first Search AKA BFS -> Traverse through sibling Nodes
        //-> Depth-first Search AKA DFS -> Traverse through Child Nodes

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
        this.size = 0;
    }
    add(val){
        let newNode = new Node(val);
        if(!this.root){
            this.root = newNode;
            this.size++;
            return this;
        }
        let current = this.root;
        while(true){
            if(val === current.val){
                console.log('Duplicated Value not allowed!');
                return 'duplication is not allowed';
            }
            if(val<current.val){
                if(current.left){
                    current = current.left;
                }else{
                    current.left = newNode;
                    this.size++;
                    return this;
                }
            }else if(val > current.val){
                if(current.right){
                    current = current.right;
                }else{
                    current.right = newNode;
                    this.size++;
                    return this;
                }
            }
        }
    }
    BFS(){//Breadth First Search
        let tracker;
        let queue = [];
        let visited = [];
        queue.push(this.root);
        while(queue.length){
            tracker = queue.shift();
            visited.push(tracker.val);
            if(tracker.left){
                queue.push(tracker.left);
            }if(tracker.right){
                queue.push(tracker.right);
            }
        }
        return visited;
    }
    DFS(){
        let node = this.root;
        let visited = [];
        function traverse(node){
            //visited.push(node.val); preOrder
            // if(node.left) traverse(node.left);
            node.left && traverse(node.left);
            //visited.push(node.val); //inOrder
            node.right && traverse(node.right);
            //visited.push(node.val); Post Order
            visited.push(node.val);
        }
       traverse(node);
       return visited;
    }
}

let tree = new BST();
tree.add(10);
tree.add(6);
tree.add(15);
tree.add(3);
tree.add(8);
tree.add(20);