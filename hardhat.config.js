require("@nomiclabs/hardhat-waffle")
require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()
require("./tasks/block_number")
require("hardhat-gas-reporter")
require("solidity-coverage")


/** @type import('hardhat/config').HardhatUserConfig */
const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL || "https://eth-rinkbey/example"
const PRIVATE_KEY = process.env.PRIVATE_KEY || "0xkey"
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "key"
const COINMARKET_API_KEY = process.env.COINMARKET_API_KEY || "key"
module.exports = {
    //default network hardhat , it automatically comes with an rpc network and url;
    defaultNetwork: "hardhat",
    networks: {
        sepolia: {
            url: SEPOLIA_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainid: 11155111,
        },
        localhost: {
            url: "http://localhost:8545",

            chainid: 31337,
        },
    },
    solidity: "0.8.19",
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    gasReporter: {
        enabled: true,
        outputFIle: "gas-report.txt",
        noColors: true,
        currency: "USD",
        coinmarketcap: COINMARKET_API_KEY,
        token: "BNB",
    },


};