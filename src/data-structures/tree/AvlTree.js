const { BinarySearchTree } = require('./BinarySearchTree')
class AvlTreeNode{
    constructor(value=null){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class AvlTree extends BinarySearchTree{

    insert(value){
        let newNode = new AvlTreeNode(value)
        this.root = this.insertNode(this.root,newNode);
    }

    insertNode(node,newNode){
      
            if(node==null)
                {  
                    node=newNode;      
                }
            else  if(node.value<newNode.value){
                {
                    node.right = this.insertNode(node.right,newNode);
                    if(node.right !== null &&this.balanceFactor(node)<-1){
                        if(this.balanceFactor(node.right)>0){
                            node = this.rotationLR(node);
                        }
                        else if(this.balanceFactor(node.right)<0){
                                node = this.rotationLL(node);
                        }
                     }          
                }
        }
        else if(node.value>newNode.value){
                node.left = this.insertNode(node.left,newNode)
                if(this.balanceFactor(node)>1){
                   
                    if(this.balanceFactor(node.left)<0){
                      node = this.rotationRL(node);
                    }
                    else if(this.balanceFactor(node.left)>0){
                        node = this.rotationRR(node);
                    }
                 }
               
            }
            return node;
        }
    

     rotationLL(node) {
        let tmp = node.right;
        node.right = tmp.left;
        tmp.left = node;
        return tmp;
     }
     
     rotationRR(node) {
        let tmp = node.left;
        node.left = tmp.right;
        tmp.right = node;
        return tmp;
     }
     
     rotationLR(node) {
        node.right = this.rotationRR(node.right);
        return this.rotationLL(node);
     }
     
     rotationRL(node) {
        node.left = this.rotationLL(node.left);
        return this.rotationRR(node);
     }

    getHeight(root) {
        let height = 0;
        if (root === null || typeof root == "undefined") {
           height = -1;
        } else {
           height = Math.max(this.getHeight(root.left), this.getHeight(root.right)) + 1;
        }
        return height;
     }

     balanceFactor(node){
         return this.getHeight(node.left)-this.getHeight(node.right);
     }
}

module.exports = { AvlTree }
