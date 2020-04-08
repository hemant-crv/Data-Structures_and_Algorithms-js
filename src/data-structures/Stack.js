const {SinglyLinkedList} = require('./LinkedList.js')

class Stack{

    constructor(){
        this.linkedList  = new SinglyLinkedList(); 
    }

    isEmpty(){       
        return !this.linkedList.head;
    }

    push(val){
        return this.linkedList.prepend(val);
    }

    pop(){
        return this.linkedList.deleteHead();
    }

    toArray(){
        const arr=[];
        this.linkedList.forEach(ele => {
            arr.push(ele);
        });
        
        return arr;
    }

    peek(){
        if (this.isEmpty()) {
          return null;
        }
        return this.linkedList.head.val;
      }
}


module.exports = { Stack };