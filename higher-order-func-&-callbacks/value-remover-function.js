function destroyer(array, ...values) {
  return array.filter(value => !values.includes(value));
}