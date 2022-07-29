import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { useWallet } from "@solana/wallet-adapter-react";
import {
  clusterApiUrl,
  Transaction,
  SystemProgram,
  LAMPORTS_PER_SOL,
  PublicKey,
  Connection,
} from "@solana/web3.js";
import { FC, useCallback, useState } from "react";
require("../App.css");
require("@solana/wallet-adapter-react-ui/styles.css");
let thelamports = 0;
let theWallet = "9m5kFDqgpf7Ckzbox91RYcADqcmvxW4MmuNvroD5H2r9";

const Home: FC = () => {
  let [lamports, setLamports] = useState(0.1);
  const connection = new Connection(clusterApiUrl("devnet"));
  const { publicKey, sendTransaction } = useWallet();
  const onClick = useCallback(async () => {
    if (!publicKey) throw new WalletNotConnectedError();
    connection.getBalance(publicKey).then((bal) => {});
    let lamportsI = LAMPORTS_PER_SOL * lamports;
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: new PublicKey(theWallet),
        lamports: lamportsI,
      })
    );
    const signature = await sendTransaction(transaction, connection);
    await connection.confirmTransaction(signature, "processed");
  }, [publicKey, sendTransaction, connection, lamports]);
  const setTheLamports = (e: any) => {
    console.log(Number(e.target.value));
    setLamports(Number(e.target.value));
    lamports = e.target.value;
    thelamports = lamports;
  };
  return (
    <div className="page">
      <h2 className="page-text">Please connect your wallet.</h2>
      <section className="input-wallet">
        <input
          value={lamports}
          type="number"
          onChange={(e) => setTheLamports(e)}
        ></input>
        <button onClick={onClick}>Send Sol</button>
      </section>
    </div>
  );
};

export default Home;
