import { useState, useEffect } from "react";
import { ethers } from "ethers";
import MessageContractABI from "./MessageContract.json";

function App() {
  const [message, setMessage] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const init = async () => {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contractAddress = "YOUR_CONTRACT_ADDRESS"; // Replace with deployed contract address
        const messageContract = new ethers.Contract(contractAddress, MessageContractABI.abi, signer);
        setContract(messageContract);

        const initialMessage = await messageContract.message();
        setMessage(initialMessage);
      }
    };
    init();
  }, []);

  const updateMessage = async () => {
    if (contract) {
      const tx = await contract.setMessage(newMessage);
      await tx.wait();
      const updatedMessage = await contract.message();
      setMessage(updatedMessage);
      setNewMessage("");
    }
  };

  return (
    <div>
      <h1>Current Message: {message}</h1>
      <input
        type="text"
        placeholder="Enter new message"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={updateMessage}>Update Message</button>
    </div>
  );
}

export default App;
