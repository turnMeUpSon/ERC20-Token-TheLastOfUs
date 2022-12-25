const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  const TlouToken = await ethers.getContractFactory("TlouToken", deployer);
  const tlouToken = await TlouToken.deploy();

  console.log(`TLOU Token deployed to ${tlouToken.address}`);
}

// TLOU Token deployed to 0x59e4dd2195C9f9eA881c033d39A8D68aC25bebA5

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
