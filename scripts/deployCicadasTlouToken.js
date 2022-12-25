const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  const CicadasTlouToken = await ethers.getContractFactory(
    "CicadasTlouToken",
    deployer
  );
  const cicadasTlouToken = await CicadasTlouToken.deploy();

  console.log(
    `Cicadas TLOU Token (CICTT) deployed to ${cicadasTlouToken.address}`
  );
}

// Cicadas TLOU Token (CICTT) deployed to 0x3493d247158ce69F6Af9611Ad84E0e9A4049FEDB

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
