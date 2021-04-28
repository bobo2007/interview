/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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

 // 方法1  递归实现
var deleteDuplicates0 = function(head) {
    if(head == null || head.next == null) return head;
    if(head.val !== head.next.val){
        // 如果不重复则指向下一个节点
        head.next = deleteDuplicates(head.next);
        return head;
    }else{
        while(head.next && (head.val === head.next.val)){
            head = head.next;
        }
        // 有重复节点直接略过,从重复节点的下一个节点开始。
        return deleteDuplicates(head.next);
    }
};

// 方法2 迭代实现  一次遍历
var deleteDuplicates1 = function(head){
    if(head == null || head.next == null) return head;
    let dummy = new ListNode(-1, head);
    let pre = dummy;
    let cur = head;
    while(cur){
        while(cur.next && (cur.val == cur.next.val)){
            cur = cur.next;
        }
        if(pre.next == cur){
            // pre 和 cur没有重复节点
            pre = pre.next;
        }else{
            // pre 和 cur之间有重复节点
            pre.next = cur.next;
        }
        cur = cur.next;
    }
    return dummy.next;
}

// 方法3  利用计数(可以忽略有序链表)  两次遍历
// 第一次遍历统计每个节点的值出现的次数，第二次遍历时若发现head.next.val值出现次数不为1，则删除head.next
var deleteDuplicates = function(head){
    if(head == null || head.next == null) return head;
    let map = {};
    let dummy = new ListNode(-1, head);
    let cur = head;
    while(cur){
        map[cur.val] = map[cur.val] != undefined ? map[cur.val]+1 : 1;
        cur = cur.next;
    }
    let preHead = dummy;
    while(preHead && preHead.next){
        if(map[preHead.next.val] > 1){
            preHead.next = preHead.next.next;
        }else{
            preHead = preHead.next;
        }
    }
    return dummy.next;
}


// @lc code=end


// @after-stub-for-debug-begin
module.exports = deleteDuplicates;
// @after-stub-for-debug-end