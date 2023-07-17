Initialize the SDK and contract on your project:
import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";

const sdk = new ThirdwebSDK("polygon", {
  clientId: "120d600347fd4f4572fe311e2dc07df5", // Use client id if using on the client side, get it from dashboard settings
  secretKey: "YOUR_SECRET_KEY", // Use secret key if using on the server, get it from dashboard settings
});
const contract = await sdk.getContract("0xcE221D36AC137EDc29335c57c320Ad0Dade6279B");
