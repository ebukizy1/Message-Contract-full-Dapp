import React from "react";
import { ethers } from "ethers";
import contractABI from "./abi.json";
import { useState } from "react";


export const Message = () => {
  const contractAddress = "0x8199a8eE572d05221c1CDB908c868435399241c4";

  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  const [inputMessage, setInputMessage] = useState("");
  const [contractMessage, setContractMessage] = useState("");

  async function sendMessageToContract() {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      try {
        const transaction = await contract.setMessage(inputMessage);
        await transaction.wait();
        console.log("Message set successfully");
        setInputMessage("");
      } catch (err) {
        console.error("Error:", err);
      }
    }
  }

  async function getMessageToContract() {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      try {
        const transaction = await contract.getMessage();
        setContractMessage(transaction);
        console.log(transaction);
      } catch (err) {
        console.error("Error:", err);
      }
    }
  }

  return (
  
        <div className="input-bar">
          <input
            type="text"
            placeholder="Enter your message"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
        <button onClick={sendMessageToContract}>Set Message</button>
          <button onClick={getMessageToContract}>Get Message</button>
          <p>contractMessage: {contractMessage}</p>
    </div>
  );
};
