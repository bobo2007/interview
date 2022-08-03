/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 递归 时间复杂度O(n)，需要对每个节点进行更新指针操作.  空间复杂度O(n)
var swapPairs_recursive = function(head) {
    if(head == null || head.next == null) return head;
    let newHead = head.next;
    head.next = swapPairs(newHead.next);
    newHead.next = head;
    return newHead;
};

// 迭代  时间复杂度为O(n),n为链表节点数量，需要对每个节点进行更新指针操作
// 时间复杂度：O(n)，其中 n 是链表的节点数量。需要对每个节点进行更新指针的操作。
// 空间复杂度：O(n)，其中 n 是链表的节点数量。空间复杂度主要取决于递归调用的栈空间。
var swapPairs = function(head){
    if(head == null || head.next == null) return head;
    let dummy = pre = new ListNode(0, head);
    while(pre.next && pre.next.next){
        let node1 = pre.next;
        let node2 = pre.next.next
        pre.next = node2;
        node1.next = node2.next;
        node2.next = node1;
        pre = node1;
    }
    return dummy.next;
};

// 利用栈实现
// 利用一个 stack，然后不断迭代链表，每次取出两个节点放入 stack 中，再从 stack 中拿出两个节点。
// 借助 stack 后进先出的特点，放进去的时候是 1,2 。拿出来的时候就是 2，1 两个节点了。
// 再把这两个节点串联起来，重复这个逻辑遍历完整个链表，就可以做到两两反转的效果了。
// 虽然用到了 stack，但因为只存了两个元素，所以空间复杂度还是 O(1)，时间复杂度是 O(n)。
class Stack {
    constructor(){
        this.count = 0;
        this.items = {};
    }
    isEmpty(){
        return this.count === 0;
    }
    add(elem){
        this.items[this.count] = elem;
        this.count++;
    }
    // 弹出并返回最后一个节点
    pop(){
        if(this.isEmpty()) return undefined;
        this.count--;
        let last = this.items[this.count];
        delete this.items[this.count];
        return last;
    }
};
var swapPairs_stack = function(head){
    // 链表只有一个节点 或者 链表为null 直接返回当前链表
    if(head == null || head.next == null) return head;
    let dummy = pre = new ListNode(0, head);
    let cur = head;
    let stack = new Stack();
    while(cur && cur.next){
        // 将前两个节点入栈
        stack.add(cur);
        stack.add(cur.next);
        // 弹出节点并将pre.next指向它
        pre.next = stack.pop();
        // pre 向后移动
        pre = pre.next;
        // 保存第三个节点
        cur = pre.next;
        pre.next = stack.pop();
        pre = pre.next;
        // 将第二个节点指向其后方的第三个节点即cur
        pre.next = cur;
    }
    return dummy.next;
};

// @lc code=end


// @after-stub-for-debug-begin
module.exports = swapPairs;
// @after-stub-for-debug-end