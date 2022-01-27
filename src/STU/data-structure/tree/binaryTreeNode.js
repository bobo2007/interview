/*
 * @Description: 
 * @Author: yanxbm
 * @Date: 2022-01-20 14:30:38
 * @LastEditors: yanxbm
 * @LastEditTime: 2022-01-20 14:41:10
 */

export default class BinaryTreeNode {
	constructor(value = null){
		this.left = null;
		this.right = null;
		this.parents = null;
		this.value = value;
	}

	get leftHeight(){
		if(!this.left){
			return 0;
		}
		return this.left.height + 1;
	}

	get rightHeight(){
		if(!this.right){
			return 0;
		}
		return this.right.height + 1;
	}

	// 计算二叉树的高度
	get height(){
		return Math.max(this.leftHeight, this.rightHeight);
	}


}