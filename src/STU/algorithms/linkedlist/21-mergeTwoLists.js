/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 从小到大排列，比较两个节点后返回小的。
// 方法1  递归实现， 每次递归返回值小的节点，并设置该节点的下一个节点
var mergeTwoLists1 = function (l1, l2) {
    // 当一个节点为null时，此链表到头，返回另一个节点(由于输入的两个链表都是有序的，所以不管哪个链表是非空的，
    // 它包含的所有元素都比前面已经合并链表中的所有元素都要大。这意味着我们只需要简单地将非空链表接在合并链表的后面)
    if (l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1;
    } else if (l1.val < l2.val) {
        // 和小值的下一个节点再来相比较(用比l1.val大点的节点再和它比较)
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        // 和小值的下一个节点再来相比较(用比l2.val大点的节点再和它比较)
        // l1.val >= l2.val
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};

// 方法2  迭代实现, 时间复杂度为O(m+n), m,n分别为两个链表的长度，每次循环迭代，l1和l2只有一个元素会被放进合并链表中。因此循环次数不会超过m+n.
var mergeTwoLists = function (l1, l2) {
    // 如果有一个为空链表，则直接返回另一个链表
    if (l1 == null || l2 == null) return l1 || l2;
    // 定义一个前哨节点,方便返回合并后的链表
    let dummy = new ListNode();
    let current = dummy;
    while (l1 !== null && l2 !== null) {
        // 判断 l1 和 l2 哪一个链表的头节点的值更小，将较小值的节点添加到结果里，
        // 当一个节点被添加到结果里之后，将对应链表中的节点向后移一位。
        if (l1.val <= l2.val) {
            // l1小于l2
            current.next = l1;
            l1 = l1.next; // 用l1.next和l2.val相比
        } else {
            // l2小于l1
            current.next = l2;
            l2 = l2.next; // l2.next 和 l1.val相比
        }
        current = current.next;
    }
    // 循环完成后，l1，l2最多有一个会还没合并完，将其直接合并到链表末尾
    // prevNode.next = l1 == null ? l2 : l1;
    current.next = l1 || l2;
    return dummy.next;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = mergeTwoLists;
// @after-stub-for-debug-end
