const lunches = ["Greens", "Corns", "Beans"];

function addLunchToEnd(arr, str) {
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`)
  return arr;
}

function addLunchToStart(arr, str) {
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return arr;
}

function removeLastLunch(arr) {
  if (arr.length >= 1) {
    const removedItem = arr.pop();
    console.log(`${removedItem} removed from the end of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }

  return arr;
}

function removeFirstLunch(arr) {
  if (arr.length >= 1) {
    const removedItem = arr.shift();
    console.log(`${removedItem} removed from the start of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }

  return arr;
} 

function getRandomLunch(arr) {
  if (arr.length >= 1) {
    const ranValue = Math.floor(Math.random() * arr.length);
    console.log(`Randomly selected lunch: ${arr[ranValue]}`);
  } else {
    console.log("No lunches available.");
  }
  
  return arr;
}

function showLunchMenu(arr) {
  if (arr.length >= 1) {
    console.log(`Menu items: ${arr.join(", ")}`);
  } else {
    console.log("The menu is empty.");
  }

  return arr;
}


