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
}

let tree = new BST();

tree.insert(10);
tree.insert(21);
tree.insert(32);
tree.insert(47);
tree.insert(56);

console.log(tree.bfs());

console.log(tree);
