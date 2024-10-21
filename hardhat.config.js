require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    base: {
      url: "https://base-mainnet.alchemyapi.io/v2/YOUR_ALCHEMY_API_KEY", // Replace with your Alchemy API key
      accounts: [`0x${YOUR_PRIVATE_KEY}`] // Replace with your private key
    }
  }
};
