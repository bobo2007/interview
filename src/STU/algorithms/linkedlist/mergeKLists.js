/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// 顺序合并 时间复杂度为O(k^2n), 空间复杂度O(1)
var mergeKLists1 = function(lists) {
    let result = null;
    for(let i=0; i < lists.length; i++){
        result = mergeTwoLists(result, lists[i]);
    }
    return result;
};

function mergeTwoLists(l1, l2){
    if(l1 === null){
        return l2;
    }else if(l2 === null){
        return l1;
    }else if(l1.val < l2.val){
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }else{
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}


// 分治合并
var mergeKLists = function(lists){
    
}
// @lc code=end

