class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

 class SinglyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    
    // add new node after the head
    append(val){
        var newNode = new Node(val);      
        if(!this.head)
        {  
            this.head = newNode;
            this.tail = this.head;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }
 

    //add new add before the head
    prepend(val)
    {  
        var newNode = new Node(val);    
        if(!this.head){
             this.head = newNode;
             this.tail = this.head;
        }
        else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    
    //remove the last node of the linked-list
    deleteTail(){
        if(!this.head) return null;
        const deleteTail = this.tail;
        var current = this.head;
        var newTail = current;
        while(current.next)
        {   newTail = current;
            current=current.next;
        }
        this.tail = newTail;
        this.tail.next=null;
        this.length--;
        if(this.length==0)
        {
            this.head=null;
            this.tail=null;
        }
        return deleteTail;
    }
    
    //delete the head of the linked list
    deleteHead(){
        if(!this.head) return null;
        const deletedHead = this.head;

        if (this.head.next) {
          this.head = this.head.next;
        } else {
          this.head = null;
          this.tail = null;
        }
        this.length--;
        return deletedHead;
    }

    //find value in linked list 
    find(val){
    
       if (!this.head) {
         return null;
       }

       let current = this.head;
       while(current){
        if(current.val===val)
        return current;
        current=current.next;
       }
       return null;
    }

    //delete the node with specific value from the linked list
    delete(val){

        if (!this.head) {
            return null;
          }
        
        let deletedNode = null;
        let currentNode = this.head;
        let prevNode = currentNode;

        while(currentNode){
            if(currentNode.val === val){
                if(prevNode==currentNode){  //if head is going to be deleted
                    this.head = currentNode.next;
                    prevNode=currentNode.next;
                    if(!currentNode.next)
                        this.tail = this.head;
                }
                else{
                    prevNode.next = currentNode.next;
                    prevNode=currentNode;
                    if(!currentNode.next){
                        this.tail = prevNode;
                    }
                }
                this.length--;
            }
            currentNode=currentNode.next;
        }
      
    }

    //reverse the linked-list
    reverse() {
        let currNode = this.head;
        let prevNode = null;
        let nextNode = null;
    
        while (currNode) {
          nextNode = currNode.next;
          currNode.next = prevNode;
          prevNode = currNode;
          currNode = nextNode;
        }

        this.tail = this.head;
        this.head = prevNode;
    
        return this;
      }
    
    // create linked list from an array
    fromArray(values){
      values.forEach(val => {
          this.append(val)
      });
      
      return this;
    }  
    //create array from linked list 
    toArray()
    {
      const arr = [];
      let current = this.head;
      while(current)
      {   arr.push(current.val);
          current=current.next;
      }
      return arr;
    }
}

module.exports = { SinglyLinkedList };
