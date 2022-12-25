const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  const CiviliansTlouToken = await ethers.getContractFactory(
    "CiviliansTlouToken",
    deployer
  );
  const civiliansTlouToken = await CiviliansTlouToken.deploy();

  console.log(
    `Civilians TLOU Token (CTT) deployed to ${civiliansTlouToken.address}`
  );
}

// Civilians TLOU Token (CTT) deployed to 0x0595FB01E36c154df050C1C943E7fa86D319e82C

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
