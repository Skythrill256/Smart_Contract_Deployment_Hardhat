const { task } = require("hardhat/config")
task("block-number", "prints the current blocck number").setAction(
    async(taskArgs, hre) => {
        const blockNumber = await hre.ethers.provider.getBlockNumber()
        console.log(`current blockNumber: ${blockNumber}`)
    }
)
module.exports = {}