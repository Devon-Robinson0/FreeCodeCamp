const inventory = [];

function findProductIndex(productName) {
  const findItem = inventory.find(i => i.name === productName.toLowerCase()) 
  if (findItem !== undefined) {
    return inventory.indexOf(findItem);
  } else {
    return -1;
  }
}

function addProduct(productObj) {
  const findItem = (inventory.find(i => i.name === productObj.name.toLowerCase()));
  if (findItem !== undefined) {
    findItem.quantity += productObj.quantity;
    console.log(`${productObj.name.toLowerCase()} quantity updated`);
  }else {
    const newObj = {};
    newObj.name = productObj.name.toLowerCase();
    newObj.quantity = productObj.quantity;
    inventory.push(newObj);
    console.log(`${productObj.name.toLowerCase()} added to inventory`)
  }
}

function removeProduct(productNameIs, quantity) {
  const productName = productNameIs.toLowerCase();
  const findItem = (inventory.find(i => i.name === productName.toLowerCase())) 
    if (findItem !== undefined) {
      if (findItem.quantity - quantity >= 0) {
        findItem.quantity -= quantity;
        console.log(`Remaining ${productName} pieces: ${findItem.quantity}`);
        if (findItem.quantity === 0) {
          const index = inventory.indexOf(findItem);
          inventory.splice(index, 1);
        }
      } else {
        console.log(`Not enough ${productName} available, remaining pieces: ${findItem.quantity}`);
      }
    } else {
      console.log(`${productName} not found`);
    }
}

addProduct({name: "FLOUR", quantity: 5});
removeProduct("FLOUR", 5)

// addProduct({name: "FLOUR", quantity: 5});
console.log(inventory);