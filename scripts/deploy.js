async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contract with the account:", deployer.address);

    const MessageContract = await ethers.getContractFactory("MessageContract");
    const contract = await MessageContract.deploy("Hello, Blockchain!");

    await contract.deployed();
    console.log("Contract deployed to address:", contract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
