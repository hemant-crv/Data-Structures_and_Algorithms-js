class BinarySearchTreeNode{
    constructor(value=null){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree{
    constructor(){
       this.root = null;
    }

    insert(value){    
        let newNode = new BinarySearchTreeNode(value);
        if(!this.root){
            this.root = newNode;
            return this.root;
        }
        else{
            return this.insertNode(this.root,newNode);
        }
    }

    insertNode(node,newNode){
        if(node.value<newNode.value){
            if(node.right==null)
                {
                    node.right=newNode;
                    return node.right;
                }
            else
                {
                    node = this.insertNode(node.right,newNode)
                    return node;
                }
        }
        else if(node.value>newNode.value){
            if(node.left==null)
            {
                node.left=newNode;
                return node.left;
            }
            else
            {
                node = this.insertNode(node.left,newNode)
                return node;
            }
        }
    }

    remove(value){
        this.removeNode(this.root,value)
    }

    removeNode(node,value){
        if(node==null){
            return null;
        }
        if(node.value<value){     
            node.right = this.removeNode(node.right,value);
            return node;
        }
        else if(node.value>value){       
            node.left = this.removeNode(node.left,value);
            return node;
        }
        else{
            if(node.left==null&&node.right==null){
               node=null;

               return node;
            }
            else if(node.left==null)
            {  
                node=node.right;
                return node;
            }
            else if(node.right==null)
            {   
                node=node.left;
                return node;
            }
            else{   
                let tempNode = this.treeMinNode(node.right);
                this.remove(tempNode.value);
                node.value = tempNode.value;
                return node;
            }
        }
    }

    find(value){
        return this.findNode(this.root,value);
    }

    findNode(node,value){   
        if(!node){
            return null;
        }
        if(node.value==value){
            return node;
        }
        else if(node.value>value){
            node= this.findNode(node.left,value);
            return node;    
        }
        else{
            node = this.findNode(node.right,value);
            return node;
        }
    }

    treeMinNode(node){
        if(!node){
            return null;
        }
        while(node.left){
            node=node.left;
        }
        return node;
    }
}

module.exports = { BinarySearchTree };

//var tree = new BinarySearchTree();
