/*
 * @Description: 
 * @Author: yanxbm
 * @Date: 2021-04-13 21:31:01
 * @LastEditors: yanxbm
 * @LastEditTime: 2021-04-19 14:01:25
 * @FilePath: /interview/src/index.js
 */

import LinkedList from './STU/data-structure/LinkedList/LinkedList';
// import DoublyLinkedList from './STU/data-structure/DoublyLinkedList/DoublyLinkedList';
import AddTwoSum from './STU/algorithms/linkedlist/02-addTwoNumbers';
function display(value){ console.log(value)}

// let list = new LinkedList();

// console.log(list.prepend(10));
// console.log(list.insert(8,1), list);
// console.log(list.insert(2,2), list)
// console.log(list.insert(21,2), list);
// console.log(list.insert(22,3));
// display(list.insert(22,2))

// display(list.remove(22));
// display(list.removeTail());
// display(list.removeHead());
// console.log(list.toArray(), list.count);
// display(list.find({value: 2}))
// display(list.toString())

// let list = new DoublyLinkedList();
// display(list.prepend(1));
// display(list.append(2));
// display(list.insert(3,2));
// display(list.insert(4,2));
// display(list.toArray());
// display(list.fromArray([1,2,3,2,4,1]));
// list.removeHead();
// list.removeTail();
// list.remove(1)
// display(list.find({value: 1}));
// display(list.toArray());

let list1 = new LinkedList();
let list2 = new LinkedList();
list1.fromArray([1,2,3]);
list2.fromArray([4,5,7]);
// display(list1.head, list2.head)
display(AddTwoSum(list1.head, list2.head));
