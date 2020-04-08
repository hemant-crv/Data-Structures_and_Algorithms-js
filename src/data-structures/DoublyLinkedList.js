class Node{
    constructor(val)
    {
        this.val = val;
        this.next= null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }

    //append at the tail 
    append(val){

        let newNode = new Node(val)
        if(!this.head)
        {
           this.head=newNode;
           this.tail=newNode;
        }
        else{
            this.tail.next=newNode;
            newNode.prev= this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    
    //append at the head
    prepend(val){

        let newNode = new Node(val)
        if(!this.head)
        {
           this.head=newNode;
           this.tail=newNode;
        }
        else{
            this.head.prev=newNode;
            newNode.next= this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    //delete at the tail
    deleteTail(){

        let deletedNode = this.tail;
        if(!this.head){
            return null;
        }      
        else if(this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }
        else{
        this.tail = this.tail.prev;
        this.tail.next = null;
        }
        this.length--;
        return deletedNode;
    }

    //delete at the head 
    deleteHead(){

        let deletedNode = this.head;
        if(!this.head){
            return null;
        }      
        else if(this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }
        else{       
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.length--;
        return deletedNode;
    }

    //delete particular node from the List
    delete(val){

        if (!this.head) {
            return null;
        }
        
        let currentNode = this.head;
        let deletedNode = null;
        let prevNode = currentNode;
        let nextNode =currentNode.next;
        while(currentNode){
            if(currentNode.val===val){
                if(prevNode==currentNode){   //if head is going to be deleted
                    nextNode = currentNode.next;
                    prevNode=nextNode;
                    this.head = nextNode;
                    if(!nextNode){
                        this.tail = this.head;
                    }
                    deletedNode = currentNode;
                    
                }
                else if(nextNode==currentNode){
                    deletedNode = currentNode;
                    nextNode = currentNode.next;

                    if(!nextNode){             //if tail is going to be deleted
                    this.tail = prevNode;
                    this.tail.next = null;
                    console.log('ga')
                    }
                    else{                     //except head and tail
                        prevNode.next = nextNode;
                        nextNode.prev = prevNode;
                    }
                }
                this.length--;
            }
            else{
                prevNode = currentNode;
                nextNode = currentNode.next;
            }
            currentNode=currentNode.next;
           
        }
            return deletedNode;
    }
    
    //search for the value 
    find(val){
    
        if (!this.head) {
          return null;
        }
 
        let currentNode = this.head;
        while(currentNode){
         if(currentNode.val===val)
         return currentNode;
         currentNode=currentNode.next;
        }
        return null;
    }

    //create doubly linked list from an array
    fromArray(values){

        values.forEach(val => {
            this.append(val)
        });
        
        return this;
    }  

    //create array from the doubly linked list 
    toArray(){

      const arr = [];
      let current = this.head;
      while(current)
      {   arr.push(current.val);
          current=current.next;
      }
      return arr;
    }
}


module.exports = { DoublyLinkedList };



