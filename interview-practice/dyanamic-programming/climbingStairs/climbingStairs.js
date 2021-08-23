function climbingStaircase(n, k) {
  const res = [];
  const temp = [];

  function backtrack(target) {
    if (target === 0) {
      res.push(temp.slice());
      return;
    }
    if (target < 0) return;

    for (let i = 1; i <= k; i++) {
      temp.push(i);
      backtrack(target - i);
      temp.pop();
    }
  }
  backtrack(n);
  return res;
};