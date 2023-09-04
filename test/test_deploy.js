const { ethers } = require("hardhat");
const { isCallTrace } = require("hardhat/internal/hardhat-network/stack-traces/message-trace");
const { expect, assert } = require("chai");

describe("SimpleStorage", function() {
    let simpleStorageFactory
    let simpleStorage

    beforeEach(async function() {
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
        simpleStorage = await simpleStorageFactory.deploy();


    })
    it('Should start a favourite number of 0', async function() {
        const currentValue = await simpleStorage.retrieve()
        const expectedvalue = "0";
        assert.equal(currentValue.toString(), expectedvalue)
    })
    it("Should update when we call", async function() {
        const expectedvalue = "7"
        const transactionResponse = await simpleStorage.store(expectedvalue)
        await transactionResponse.wait(1)
        const currentValue = await simpleStorage.retrieve()
        assert.equal(currentValue.toString(), expectedvalue)


    })
})