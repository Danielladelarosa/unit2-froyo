// function prompt user for froyo order
const countFroyoOrders = () => {
  // prompt user for froyo order
  const input = prompt("Enter a list of comma-separated froyo flavors:");
  
  const flavors = input.split(",");

  // open
  const flavorCount = {};

  // for... in to keep count
  for (let i in flavors) {
    // added in from internet resourse, 
    const flavor = flavors[i].trim(); 
      // if new flvor is introduced, automatically assign 1
      if (flavorCount[flavor]) {
          flavorCount[flavor]++;
      } else {
          // If flavor does not exist, initialize its count to 1
          flavorCount[flavor] = 1;
      }
  }

  // console log each flavor
  console.log("Froyo Orders:");
  for (let flavor in flavorCount) {
      console.log(`${flavor}: ${flavorCount[flavor]}`);
  }

  // return flavor count
  return flavorCount;
}

// call function
countFroyoOrders();
