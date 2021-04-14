/*
 * @Description: 
 * @Author: yanxbm
 * @Date: 2021-04-13 21:31:01
 * @LastEditors: yanxbm
 * @LastEditTime: 2021-04-14 20:05:39
 * @FilePath: /interview/src/index.js
 */

import LinkedList from './STU/data-structure/LinkedList/LinkedList'
function display(value){ console.log(value)}

let list = new LinkedList();
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

display(list.fromArray([1,2,3,4,5]));
display(list.reverse());
display(list.toString());