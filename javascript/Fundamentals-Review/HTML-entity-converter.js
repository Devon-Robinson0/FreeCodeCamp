function convertHTML(string) {
  const charConvertList = [
    ['&', '&amp;'],
    ['<', '&lt;'],
    ['>', '&gt;'],
    ['"', '&quot;'],
    ["'", '&apos;']
  ];
  let newString = string;
  for (let item of charConvertList) {
    console.log(item);
    newString = newString.replaceAll(item[0], item[1]);
    console.log(item[0], item[1]);
  }
  return newString;
}
console.log(convertHTML("Dolce & Gabbana"));

