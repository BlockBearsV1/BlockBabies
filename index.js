Initialize the SDK and contract on your project:

import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";

const sdk = new ThirdwebSDK("polygon", {
  clientId: "120d600347fd4f4572fe311e2dc07df5", // Use client id if using on the client side, get it from dashboard settings
  secretKey: "YOUR_SECRET_KEY", // Use secret key if using on the server, get it from dashboard settings
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
