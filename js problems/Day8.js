const removeDuplicate = (arr) => {
  let newArr = new Set(arr);
  console.log([...newArr]);
};
removeDuplicate([1, 2, 3, 4, 4, 5, 6, 2]);
