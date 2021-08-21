function firstDuplicate(arr) {
  const hash = {};

  for (let num of arr) {
    if (num in hash) {
      return num;
    } else {
      hash[num] = true;
    }
  }
  return -1;
}
