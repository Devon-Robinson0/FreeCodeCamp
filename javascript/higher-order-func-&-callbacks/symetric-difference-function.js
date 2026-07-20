function diffArray(array1, array2) {
  const dupes = array1.filter(value => array2.includes(value));
  const diffArray1 = array1.filter(value => !dupes.includes(value));
  const diffArray2 = array2.filter(value => !dupes.includes(value));

  const combinedArrays = [...diffArray1, ...diffArray2];

  return combinedArrays;
}

console.log(diffArray(["diamond", "stick", "apple"], ["stick", "emerald", "bread"]));