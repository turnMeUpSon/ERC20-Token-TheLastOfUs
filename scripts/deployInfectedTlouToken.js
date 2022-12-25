const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  const InfectedTlouToken = await ethers.getContractFactory(
    "InfectedTlouToken",
    deployer
  );
  const infectedTlouToken = await InfectedTlouToken.deploy();

  console.log(
    `Infected TLOU Token (ITT) deployed to ${infectedTlouToken.address}`
  );
}

// Infected TLOU Token (ITT) deployed to 0x8695BC7865aE0395a784d2C09662f7E4D5259F03

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
