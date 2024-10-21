# Message
# Base Hackathon Project

This is a simple blockchain project for interacting with a message-storing smart contract on the Base network.

## Project Structure

```
base-hackathon-project/
│
├── contracts/                # Smart contracts
│   └── MessageContract.sol    # Solidity contract
│
├── scripts/                  # Deployment scripts
│   └── deploy.js              # Script for deploying the contract
│
├── test/                     # Tests for smart contracts
│   └── test.js                # Test cases for the smart contract
│
├── frontend/                 # Frontend app to interact with the contract
│   ├── src/
│   │   ├── App.js             # React component for the app
│   │   └── index.js           # Entry point for React
│   └── package.json           # Dependencies for the frontend
│
├── hardhat.config.js          # Configuration for Hardhat
├── .gitignore                 # Ignore files and folders for Git
└── README.md                  # Project documentation
```
## Requirements
* *Node.js* (v14 or higher)
* *npm* or *yarn*
* *MetaMask* extension for interacting with the frontend
* *Hardhat* for compiling and deploying smart contracts

## Setup Instructions
1. **Clone the Repository**
```
git clone https://github.com/yourusername/base-hackathon-project.git
cd base-hackathon-project
```
2. **Install Dependencies**
*For the smart contracts:*
```
npm install
```
3. **Compile the Smart Contract**
Use Hardhat to compile the contract:
```
npx hardhat compile
```
4. **Deploy the Contract**
To deploy the smart contract, you can either deploy it locally or to the Base network.

*Local Deployment:*

You can run a local Hardhat blockchain and deploy the contract:
```
npx hardhat node
npx hardhat run scripts/deploy.js --network localhost
```
**Base Network Deployment:**

Before deploying to the Base network, update your `hardhat.config.js` with the Base network settings, including your API key and private key. Then deploy:
```
npx hardhat run scripts/deploy.js --network base
```
5. **Running the Frontend**
Navigate to the frontend directory and install the dependencies:
```
cd frontend
npm install
```
Start the React frontend:

```
npm start
```
The frontend will be available at `http://localhost:3000`. Ensure MetaMask is connected to the same network as the contract (either the Base network or local Hardhat network).

6. **Testing the Smart Contract**
Run the tests using Hardhat:
```
npx hardhat test
```
This will execute the tests located in the `test/` folder.
## Usage

Once the frontend is running and the smart contract is deployed:
1. *Connect your MetaMask wallet to the dApp.*
2. *View the current message stored in the smart contract.*
3. *Enter a new message and update it on the blockchain by clicking "Update Message".*
4. *The updated message will be reflected immediately.*

  ## Project Details
* **Smart Contract Language:** Solidity
* **Frontend:** React.js
* **Blockchain:** Base network (an Ethereum L2 solution)

