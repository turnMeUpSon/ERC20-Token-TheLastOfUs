const { ethers } = require("hardhat");
const axios = require("axios");
require("dotenv").config();

const UNISWAP_V3_FACTORY_ADDRESS = "0x1F98431c8aD98523631AE4a59f267346ea31F984";

const GOERLI_PROVIDER = new ethers.providers.JsonRpcProvider(
  process.env.ALCHEMY_GOERLI_API_KEY
);
const WALLET_ADDRESS = process.env.WALLET_ADDRESS;
const WALLET_SECRET = process.env.PRIVATE_KEY;
const TLOU_TOKEN_ADDRESS = "0x075ABBc69569E3655D6124632723BD689A5286d1";
const CICADAS_TLOU_TOKEN_ADDRESS = "0x3493d247158ce69F6Af9611Ad84E0e9A4049FEDB";

const wallet = new ethers.Wallet(WALLET_SECRET);
const connectedWallet = wallet.connect(GOERLI_PROVIDER);

async function main() {
  // setup v3 factory
  const url = `https://api.etherscan.io/api?module=contract&action=getabi&address=${UNISWAP_V3_FACTORY_ADDRESS}&apikey=${process.env.ETHERSCAN_API}`;
  const res = await axios.get(url);
  const abi = JSON.parse(res.data.result);

  const [signer] = await ethers.getSigners();

  const factoryContract = new ethers.Contract(
    UNISWAP_V3_FACTORY_ADDRESS,
    abi,
    signer
  );

  const tx_4 = await factoryContract
    .connect(signer)
    .createPool(TLOU_TOKEN_ADDRESS, CICADAS_TLOU_TOKEN_ADDRESS, 500);
  const receipt_4 = await tx_4.wait();

  const newPoolAddressTlouCicadas = await factoryContract.getPool(
    TLOU_TOKEN_ADDRESS,
    CICADAS_TLOU_TOKEN_ADDRESS,
    500
  );
  console.log(`newPoolAddressTlouCicadas: ${newPoolAddressTlouCicadas}`);

  // newPoolAddressTlouCicadas: 0x512d6E38BE72f2C392133071849a7e95Fd0af319
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
