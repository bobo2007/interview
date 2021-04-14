/*
 * @Author: yanxbm
 * @Date: 2021-04-12 13:50:54
 * @LastEditTime: 2021-04-13 17:33:39
 * @LastEditors: yanxbm
 * @Description: In User Settings Edit
 * @FilePath: /stu/src/data-structure/comparator/index.js
 */

export default class Comparator{
    /**
     * @description: 如果我们要在链表中判断当前节点是否是我们需要的节点，而链表中的节点不仅仅是值类型
     *               还有可能是引用类型，因此需要我们提供一个比较方法，当没有这个方法的时候则使用默认的comparator，因为
     *               它有可能会在其他数据结构中也用到，因此把他提取到comparator文件中。
     * @param { function(a: *, b: *) }
     */    
    constructor(compareFunction){
        this.compare = compareFunction || Comparator.defaultCompareFunction;
    }

    /**
     * @description: 默认对比方法, 会假设 a,b为数字或字符串
     * @param {(string|number)} a
     * @param {(string|number)} b
     * @return {number}
     */
    static defaultCompareFunction(a, b){
        if(a === b){
            return 0;
        }
        return a < b ? -1 : 1;
    }

    /**
     * @description: 检查a和b是否相等
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    equal(a, b){
        return this.compare(a, b) === 0;
    }
    
    /**
     * @description: 检查a是否小于b
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    lessThan(a, b){
        return this.compare(a, b) < 0;
    }

    /**
     * @description: 检查a是否大于b
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    greaterThan(a, b){
        return this.compare(a, b) > 0;
    }

    /**
     * @description: 检查a是否小于等于b
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    lessThanOrEqual(a, b){
        return this.lessThan(a, b) || this.equeal(a, b);
    }

    /**
     * @description: 检查a是否大于等于b
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    greaterThanOrEqual(a, b){
        return this.greaterThan(a, b) || this.equal(a, b);
    }

    /**
     * @description: 反向对比
     * @param {*}
     * @return {*}
     */
    reverse(){
        const compareOrigin = this.compare;
        this.compare = (a, b) => compareOrigin(b, a);
    }
}