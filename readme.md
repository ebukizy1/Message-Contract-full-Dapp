# Smart Contract - Message Contract (Test-Driven Development)
Overview
This smart contract, built using Test-Driven Development (TDD), enables users to set and retrieve messages on the Ethereum blockchain.

Testing
The test folder contains comprehensive tests for all contract functionalities. Tests are written using the Hardhat framework, ensuring the contract's robustness and correctness.

Deployment Script
The script.js file contains the deployment script. The smart contract is deployed to the Sepolia Ethereum testnet, and the contract address is 0x8199a8eE572d05221c1CDB908c868435399241c4.

Contract Verification
The contract is verified using Hardhat, ensuring transparency and providing users with confidence in the deployed code.

Frontend - Ethereum Message App
Project Initialization
The frontend is created using npx create-react-app for a quick and efficient setup.

Communication with Smart Contract
The Ethereum blockchain communication is established using the ethers library. The ABI (Application Binary Interface) is utilized to interact with the smart contract.

Functionality
Set Message: Users can input a message and set it on the Ethereum blockchain.
Get Message: Users can retrieve the stored message from the blockchain.
Deployment
To deploy the frontend:

Install dependencies: npm install
Start the development server: npm start
Ensure that the development environment has an Ethereum provider (e.g., MetaMask) connected to the Sepolia testnet.


