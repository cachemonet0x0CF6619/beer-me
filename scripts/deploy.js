const hre = require('hardhat')

async function main() {
  const Coffee = await hre.ethers.getContractFactory('CoffeePortal');
  const coffee = await Coffee.deploy();
  console.log(coffee.address);

  const Beer = await hre.ethers.getContractFactory('BeerMe');
  const beer = await Beer.deploy();
  console.log(beer.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
