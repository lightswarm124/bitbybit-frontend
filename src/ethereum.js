import detectEthereumProvider from "@metamask/detect-provider";
import { ethers, Contract } from "ethers";
import { TOKEN_ADDRESS, TOKEN_ABI } from "./contracts/SaleContractABI.js";

const getBlockchain = () =>
  new Promise(async (resolve, reject) => {
    let provider = await detectEthereumProvider();

    if (provider) {
      await provider.request({ method: "eth_requestAccounts" });
      provider = new ethers.providers.Web3Provider(provider);
      const balance = await provider.getBalance(
        provider.provider.selectedAddress
      );
      const readableBalance = ethers.utils.formatEther(balance._hex);
      console.log("readable balance: " + readableBalance + " BNB");
      const signer = provider.getSigner();
      const simpleStorage = new Contract(TOKEN_ADDRESS, TOKEN_ABI, signer);
      resolve({ simpleStorage });
      return;
    }
    reject("Install Metamask");
  });

export default getBlockchain;
