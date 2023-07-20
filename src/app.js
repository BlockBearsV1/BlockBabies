Initialize the SDK and contract on your project:

import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";

const sdk = new ThirdwebSDK("polygon", {
  clientId: "120d600347fd4f4572fe311e2dc07df5", // Use client id if using on the client side, get it from dashboard settings
  secretKey: "yL-ussjO2woOBAvljEeaSnWYH-PwZ3ApkIycfEE4w4SBmwfT1-mbBzOGQWyLtnFiHYmqV-YJhSRh5cJ7X0kVTw", // Use secret key if using on the server, get it from dashboard settings
});
const contract = await sdk.getContract("0xcE221D36AC137EDc29335c57c320Ad0Dade6279B");

Set the metadata of this contract

await contract.metadata.set({
  name: "My Contract",
  description: "My contract description"
})

Update the metadata of a contract

await contract.metadata.update({
  description: "My new contract description"
})

Get the metadata of this contract

const metadata = await contract.metadata.get();
console.log(metadata);

Set token allowance

// Address of the wallet to allow transfers from
const spenderAddress = "0x...";
// The number of tokens to give as allowance
const amount = 100
await contract.erc20.setAllowance(spenderAddress, amount);

Transfer tokens

// Address of the wallet you want to send the tokens to
const toAddress = "0x...";
// The amount of tokens you want to send
const amount = 0.1;
await contract.erc20.transfer(toAddress, amount);

Transfer tokens from a specific address

// Address of the wallet sending the tokens
const fromAddress = "0x10a9217d02AFE1Db02334613530F6f808c092d88";
// Address of the wallet you want to send the tokens to
const toAddress = "0x...";
// The number of tokens you want to send
const amount = 1.2
// Note that the connected wallet must have approval to transfer the tokens of the fromAddress
await contract.erc20.transferFrom(fromAddress, toAddress, amount);

Get token allowance

// Address of the wallet to check token allowance
const spenderAddress = "0x...";
const allowance = await contract.erc20.allowance(spenderAddress);

Get token allowance of a specific wallet

// Address of the wallet who owns the funds
const owner = "0x10a9217d02AFE1Db02334613530F6f808c092d88";
// Address of the wallet to check token allowance
const spender = "0x...";
const allowance = await contract.erc20.allowanceOf(owner, spender);

Get token balance for the currently connected wallet

const balance = await contract.erc20.balance();

Get token balance for a specific wallet

const walletAddress = "0x10a9217d02AFE1Db02334613530F6f808c092d88";
const balance = await contract.erc20.balanceOf(walletAddress);

Get the token metadata

const token = await contract.erc20.get();

Get the total supply for this token

const balance = await contract.erc20.totalSupply();

Mint tokens to many wallets

// Data of the tokens you want to mint
const data = [
  {
    toAddress: "0x10a9217d02AFE1Db02334613530F6f808c092d88", // Address to mint tokens to
    amount: 0.2, // How many tokens to mint to specified address
  },
 {
   toAddress: "0x...",
   amount: 1.4,
 }
]

await contract.mintBatchTo(data);

Burn tokens

// The amount of this token you want to burn
const amount = 1.2;

await contract.erc20.burn(amount);

Burn tokens from a specific wallet

// Address of the wallet sending the tokens
const holderAddress = "0x10a9217d02AFE1Db02334613530F6f808c092d88";

// The amount of this token you want to burn
const amount = 1.2;

await contract.erc20.burnFrom(holderAddress, amount);

Mint tokens

const amount = "1.5"; // The amount of this token you want to mint
await contract.erc20.mint(amount);

Mint tokens to a specific wallet

const toAddress = "0x10a9217d02AFE1Db02334613530F6f808c092d88"; // Address of the wallet you want to mint the tokens to
const amount = "1.5"; // The amount of this token you want to mint
await contract.erc20.mintTo(toAddress, amount);

Mint with signature

// see how to craft a payload to sign in the `contract.erc20.signature.generate()` documentation
const signedPayload = contract.erc20.signature().generate(payload);

// now the payload can be used to mint tokens
const tx = contract.erc20.signature.mint(signedPayload);

Mint tokens from a signature

// see how to craft a payload to sign in the `generate()` documentation
const signedPayload = contract.erc20.signature.generate(payload);

// Use the signed payload to mint the tokens
const tx = contract.erc20.signature.mint(signedPayload);

Generate a signature that can be used to mint a certain amount of tokens

const startTime = new Date();
const endTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
const payload = {
  quantity: 4.2, // The quantity of tokens to be minted
  to: 0x10a9217d02AFE1Db02334613530F6f808c092d88, // Who will receive the tokens
  price: 0.5, // the price to pay for minting those tokens
  currencyAddress: NATIVE_TOKEN_ADDRESS, // the currency to pay with
  mintStartTime: startTime, // can mint anytime from now
  mintEndTime: endTime, // to 24h from now,
  primarySaleRecipient: "0x...", // custom sale recipient for this token mint
};

const signedPayload = await contract.erc20.signature.generate(payload);
// now anyone can use these to mint the NFT using `contract.erc20.signature.mint(signedPayload)`

Grant a role to a specific address

await contract.roles.grant("minter", "0x10a9217d02AFE1Db02334613530F6f808c092d88");

Revoke a role from a specific address

await contract.roles.revoke("minter", "0x10a9217d02AFE1Db02334613530F6f808c092d88");

Overwrite the list of members for specific roles

const minterAddresses = await contract.roles.get("minter");
await contract.roles.setAll({
 minter: []
});
console.log(await contract.roles.get("minter")); // No matter what members had the role before, the new list will be set to []

Get all members of a specific role

const minterAddresses = await contract.roles.get("minter");

Get all members of all roles

const rolesAndMembers = await contract.roles.getAll();

Set the platform fee recipient and basis points

await contract.platformFees.set({
  platform_fee_basis_points: 100, // 1% fee
  platform_fee_recipient: "0x..." // the fee recipient
})

Get the platform fee recipient and basis points

const feeInfo = await contract.platformFees.get();
console.log(feeInfo.platform_fee_recipient);
console.log(feeInfo.platform_fee_basis_points);

Set the primary sale recipient

await contract.sales.setRecipient(recipientWalletAddress);

Get the primary sale recipient

const salesRecipient = await contract.sales.getRecipient();            
