// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  const constructorIntialValue = "WHAT IS SUCCESS FOR YOU";

  const message = await hre.ethers.deployContract("Message", [constructorIntialValue]);

  await message.waitForDeployment();

  console.log(
    `erc20 contract successfully deployed on ${message.target}`

  );
}

//0x8199a8eE572d05221c1CDB908c868435399241c4
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
