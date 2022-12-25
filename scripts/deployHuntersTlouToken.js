const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  const HuntersTlouToken = await ethers.getContractFactory(
    "HuntersTlouToken",
    deployer
  );
  const huntersTlouToken = await HuntersTlouToken.deploy();

  console.log(
    `Hunters TLOU Token (HTT) deployed to ${huntersTlouToken.address}`
  );
}

// Hunters TLOU Token (HTT) deployed to 0xdEeABbDB13228dE4c7a5C146f8863a5E738C6824

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
