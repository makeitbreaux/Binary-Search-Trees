function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

class BST {
    constructor() {
        this.root = null;
    }

    add(data) {
        const node = new Node(data);
        
        if(!this.root) {
            this.root = node;
        } else {
            this.insertNode(node);
        }
    }

    insertNode(node) {
        let current = this.root;

        while(current) {
            if(node.data < current.data) {
                if(!current.left){
                    current.left = node;
                    break;
                }

                current = current.left;
            } else if(node.data > current.data) {
                if(!current.right) {
                    current.right = node;
                    break;
                }

                current = current.right;
            } else {
                break;
            }
        }
    }

    remove(data) {
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, data) {
        if(!node) {
            return null;
        }

        if(data === node.data) {
            if(!node.left && !node.right) {
                return null;
            }

            if(!node.left) {
                return node.right;
            }

            if(!node.right) {
                return node.left;
            }

            const temp = this.getMin(node.right);
            node.data = temp;
            
            node.right = this.removeNode(node.right, temp)
            return node;
        } else if (data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node;
        } else {
            node.right = this.removeNode(node.right, data);
            return node;
        }
    }   
        
    getMin(node) {
        if (!node) {
            node = this.root;
        }

        while (node.left) {
            node = node.left;
        }

        return node.data;
    }

    preOrder(node, cb) {
        if(node) {
            if(cb) {
                cb(node); 
            }

            this.preOrder(node.left, cb);
            this.preOrder(node.right, cb);
        }
    }

    traverseDFS(cb, method) {
        const current = this.root;

        //this is calling a method within the object itself
        if(method) {
            this[`${method}`](current, cb)
        } else {
            this.preOrder(current, cb)
        }
    }

    printDFS() {
        this.traverseDFS((node) => {
            console.log(
                `Node.data ${node.data}`,
                `Node.left: ${node.left ? node.left.data : null}`,
                `Node.right: ${node.right ? node.right.data : null}`

            )
        })
    }
}


(function test() {
    let tree = new BST();

    tree.add(5);
    tree.add(3);
    tree.add(2);

    tree.printDFS();

    console.log("remove 5");
    tree.remove(5);
    tree.printDFS();
})()