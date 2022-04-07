class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let current = this.root;

        while(true) {
            if(value === current.value) {
                return undefined;
            }

            if(value < current.value) {
                if(!current.left) {
                    current.left = newNode;
                    return tree;
                }
                current = current.left;
            } else if (value > current.value) {
                if(!current.right) {
                    current.right = newNode;
                    return tree;
                }
                current = current.right;
            }
        }
    }

    find (value) {
        if (!value || !this.root) {
            return undefined;
        }

        let current = this.root;

        let found = false;

        while (!found && current) {
            if (value === current.value) {
                found = true;
            }

            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            }
        }
        return found;
    }

    bfs() {
        let queue = [];
        let result = [];
        let currentNode;
        queue.push(this.root);
        while (queue.length) {
            currentNode = queue.shift();
            result.push(currentNode.value);
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        } return result;
    }

    dfsPreOrder() {
        let result = [];
        function traverse(currentNode) {
            result.push(currentNode.value);
            if(currentNode.left) traverse(currentNode.left);
            if(currentNode.right) traverse(currentNode.right);
        } 
        traverse(this.root);
        return result;
    }   

    dfsInOrder() {
        let result = [];
        function traverse(currentNode) {
            if(currentNode.left) traverse(currentNode.left);
            result.push(currentNode.value);
            if(currentNode.right) traverse(currentNode.right);
        } 
        traverse(this.root);
        return result;
    }   

    dfsPostOrder() {
        let result = [];
        function traverse(currentNode) {
            if(currentNode.left) traverse(currentNode.left);
            if(currentNode.right) traverse(currentNode.right);
            result.push(currentNode.value);
        } 
        traverse(this.root);
        return result;
    }   
}

let tree = new BST();

tree.insert(1);
tree.insert(3);
tree.insert(5);
tree.insert(2);
tree.insert(4);

console.log(tree.dfsPostOrder());


