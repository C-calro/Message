const { expect } = require("chai");

describe("MessageContract", function () {
    it("Should return the correct initial message", async function () {
        const MessageContract = await ethers.getContractFactory("MessageContract");
        const contract = await MessageContract.deploy("Hello, Base!");
        await contract.deployed();

        expect(await contract.message()).to.equal("Hello, Base!");

        await contract.setMessage("New message");
        expect(await contract.message()).to.equal("New message");
    });
});
