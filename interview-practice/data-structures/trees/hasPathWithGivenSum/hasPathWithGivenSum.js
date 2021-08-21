function hasPathWithGivenSum(root, sum) {
  if (root === null) return false;
  let node = root;

  console.log(node.value, sum)
  if (!node.left && !node.right) {
    return node.value === sum ? true : false;
  }
  sum -= node.value;
  return hasPathWithGivenSum(node.left, sum) || hasPathWithGivenSum(node.right, sum);
}