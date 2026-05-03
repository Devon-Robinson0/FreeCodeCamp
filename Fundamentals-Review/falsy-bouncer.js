function bouncer(arr) {
  const newArr = [];
  for (let item of arr) {
    const boolValue = Boolean(item);
    if (boolValue) {
      newArr.push(item);
    }
  }

  return newArr;
}