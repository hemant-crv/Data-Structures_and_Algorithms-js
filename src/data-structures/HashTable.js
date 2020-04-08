const {SinglyLinkedList} = require('./LinkedList.js')

class HashTable{

    constructor(size=53){
        // array of singlyLinkedLists
        this.buckets = Array(size).fill(null).map(() => new SinglyLinkedList()); 
        //After calculating the hash value store it in the keys for later uses(fast access)
        this.keys = {};
    }

    hash(key){

        //creating the array from the key and accumulating the ascii value of the chars.
        const hash = Array.from(key).reduce((hashAccumulator,currentVal) => (hashAccumulator + currentVal.charCodeAt(0)),0)
        return hash%this.buckets.length;
    }

    set(key,value){
        const hashKey = this.hash(key);
        this.keys[key] = hashKey;
        let bucketLinkedList = this.buckets[hashKey];
        let currentNode = bucketLinkedList.head;
        let duplicate_flag = false;
        //here we are checking, do we need to update data or just need to append in the bucketLinkedList
        //if same key is there than we update the data 
        //else append the new data
        while(currentNode)
        {   
            if(currentNode.val.key===key){
                duplicate_flag=true; 
                break;
            }
            currentNode=currentNode.next;
        }
        
        if(duplicate_flag){
            currentNode.val.value = value
        }
        else{
            bucketLinkedList.append({key,value});
        }     
    }

    get(key){
        const bucketLinkedList = this.buckets[this.hash(key)];
        let currentNode = bucketLinkedList.head;
        while(currentNode)
        {   
            if(currentNode.val.key===key){
                return currentNode;
            }
            currentNode=currentNode.next;
        }
        return null;
    }
    
    delete(key){
        const bucketLinkedList = this.buckets[this.hash(key)];
        bucketLinkedList.delete(this.get(key).val);
        delete this.keys[key];
    }
}


module.exports = { HashTable };



