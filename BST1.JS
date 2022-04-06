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
}

let tree = new BST();

tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.insert(6);

console.log(tree);
