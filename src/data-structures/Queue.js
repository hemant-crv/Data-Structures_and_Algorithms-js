const {SinglyLinkedList} = require('./LinkedList.js')

class Queue{

    constructor(){
        this.linkedList  = new SinglyLinkedList(); 
    }

    isEmpty(){       
        return !this.linkedList.head;
    }

    enqueue(val){
        return this.linkedList.append(val);
    }

    dequeue(){
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


module.exports = { Queue };