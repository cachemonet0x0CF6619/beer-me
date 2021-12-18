const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('CoffePortal', function () {
  let buyer, contract, owner;
  before(async () => {
    const [owner_, buyer_] = await ethers.getSigners();
    buyer = buyer_;
    owner = owner_;
    const Contract = await ethers.getContractFactory('CoffeePortal');
    contract = await Contract.deploy();
    await contract.deployed();
  });
  it('should allow others to buy me a coffee', async () => {
      await contract
        .connect(buyer)
        .buy('hello world', 'some name',{ value: ethers.utils.parseEther('0.01') });
  });
});
