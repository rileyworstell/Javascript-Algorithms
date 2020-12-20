// Binary Tree Node Depth Solver
let nodeDepths = (root, depth = 0) => {
	if (root === null) return 0;
	return depth + nodeDepths(root.left, depth+1) + nodeDepths(root.right, depth+1);
}

// Calculate Branch Sums
let branchSums = (root) => {
  const sums = [];
  calculateBranchSums(root, 0, sums);
  return sums;
}

// branchSums helper
let calculateBranchSums = (node, runningSum, sums) => {
  if (!node) return;

  const newRunningSum = runningSum + node.value;
  if (!node.left && !node.right) {
    sums.push(newRunningSum);
    return;
  }
  calculateBranchSums(node.left, newRunningSum, sums);
  calculateBranchSums(node.right, newRunningSum, sums);
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
