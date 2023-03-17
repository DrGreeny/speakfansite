import { useEffect, useState } from "react";
import { ethers } from "ethers";
import ReactModal from "react-modal";

export default function MetamaskConnectButton() {
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState("");
  const [chainId, setChainId] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    //Listen to account or chain changes
    const handleAccountsChanged = (accounts) => {
      setAccount(accounts[0]);
    };

    const handleChainChanged = (chainId) => {
      setChainId(chainId);
    };

    if (window.ethereum) {
      window.ethereum.on("accountsChanged", handleAccountsChanged);
      window.ethereum.on("chainChanged", handleChainChanged);

      // Clean up event listeners when component unmounts
      return () => {
        window.ethereum.off("accountsChanged", handleAccountsChanged);
        window.ethereum.off("chainChanged", handleChainChanged);
      };
    }
  }, []);

  const handleConnectClick = async () => {
    //Click the Connect Button
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider);
        const signer = provider.getSigner();
        const account = await signer.getaccount();
        setAccount(account);
        setErrorMessage(null);
      } catch (error) {
        console.error(error);
        setErrorMessage(
          "An error occurred while connecting to Metamask. Please try again later."
        );
        setModalIsOpen(true);
      }
    } else {
      setErrorMessage(
        "Metamask not detected. Are you sure you are familiar with what you are doing ?"
      );
      setModalIsOpen(true);
    }
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <button
        className="border border-[#d1d1d1] px-4 py-2 rounded"
        onClick={handleConnectClick}
      >
        {account ? `Connected (${account})` : "Connect"}
      </button>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        shouldCloseOnOverlayClick={false}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#f4bb2a",
            padding: "16px",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
            color: "black",
          },
        }}
      >
        <div className="bg-inherit text-black flex flex-col items-center justify-around h-full">
          <p className="bg-inherit text-black text-xl">{errorMessage}</p>
          <button
            className="border border-black rounded px-4 py-2 hover:bg-black hover:text-[#f4bb2a]"
            onClick={handleCloseModal}
          >
            Close
          </button>
        </div>
      </ReactModal>
    </>
  );
}
