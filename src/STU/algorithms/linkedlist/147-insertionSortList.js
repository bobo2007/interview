/*
 * @lc app=leetcode.cn id=147 lang=javascript
 *
 * [147] 对链表进行插入排序
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
// 方法1   新建一个空链表，将原链表的元素一个一个插入进去 时间复杂度O(n^2)
var insertionSortList1 = function(head) {
    if(head == null || head.next == null) return head;
    // 创建一个虚拟头指针
    let dummy = new ListNode(null);
    // !!! 注意cur始终是原链表的头节点
    let cur = head; 
    // 遍历原链表
    while(cur){
        let pre = dummy;
        // 遍历寻找插入cur的位置
        while(pre.next && pre.next.val < cur.val){
            pre = pre.next;
        }
        // 通过更新指针插入新链表中 空间复杂度O(n)
        let curNext = cur.next;
        cur.next = pre.next;
        pre.next = cur;
        cur = curNext;
    }
    return dummy.next;
};

// 方法2   将链表分成两部分，前半部分是已排序，后半部分未排序，将后半部分节点陆续插入前半部分，时间复杂度O(n^2)  空间复杂度O(1)
var insertionSortList = function(head) {
    // 链表长度为空或1，直接返回
    if(head == null || head.next == null) return head;
    // 引入虚拟头节点以方便在head节点前插入节点
    let dummy = new ListNode(null, head);
    // lastSorted为链表已排序部分的最后一个节点，初始为head
    let lastSorted = head;
    // cur 为待插入的元素，初始为head.next
    // !!! 注意cur始终是lastSorted的后继节点
    let cur = head.next;
    while(cur){
        // 区分插入lastSorted前还是后
        if(cur.val >= lastSorted.val){
            // 待插入节点cur值大于lastSorted的值，将待插入元素放到lastedSorted的后面,因为待插入节点cur就是lastSorted的后继节点，所以只需要将lastSorted指向lastSorted.next即可。
            lastSorted = lastSorted.next;
        }else{
            // 从头开始遍历
            let pre = dummy;
            while(pre.next.val <= cur.val){
                // 小于待插入节点的值，继续继续向下寻找
                pre = pre.next;
            }
            // 找到位置开始插入操作
            lastSorted.next = cur.next;
            cur.next = pre.next;
            pre.next = cur;
        }
        // 继续下一个待插入节点
        cur = lastSorted.next;
    }
    return dummy.next;
}
// @lc code=end

