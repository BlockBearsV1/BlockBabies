import React from "react";
import { ThirdwebProvider, useContract } from "@thirdweb-dev/react";

function App() {
  return (
    <ThirdwebProvider
      activeChain="polygon"
      clientId="804629349823d31145290a58e7614d53"
    >
      <Component />
    </ThirdwebProvider>
  );
}

function Component() {
  const { contract, isLoading } = useContract(
    "0xcE221D36AC137EDc29335c57c320Ad0Dade6279B"
  );

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>Contract Address: {contract.address}</p>
          <p>Contract Balance: {contract.balance}</p>
        </div>
      )}
    </div>
  );
}

export default App;
