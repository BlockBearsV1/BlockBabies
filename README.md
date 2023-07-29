# BlockBabies
The Mini Version Of BlockBearsV1

# Getting Started
Install the latest version of the SDK:
Here are step-by-step instructions to set up your project:

1. Create a new directory for your project.
2. Open a terminal and navigate to the project directory.
3. Run the following command to create a new React app using Create React App:

```
npx create-react-app my-app
```

Replace "my-app" with the desired name for your project.

4. Once the command finishes, navigate into the project directory:

```
cd my-app
```

5. Install the required dependencies by running the following command:

```
npm install @thirdweb-dev/react @thirdweb-dev/sdk ethers@5 antd redux react-redux @reduxjs/toolkit redux-thunk axios
```

6. Open the `src/App.js` file and replace its contents with the code provided earlier:

```jsx
import React from "react";
import { ThirdwebProvider, useContract } from "@thirdweb-dev/react";

function App() {
  return (
    <ThirdwebProvider
      activeChain="polygon"
      clientId="INPUT-YOUR-CHAINID"
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
```

7. Open the `src/index.js` file and replace its contents with the code provided earlier:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

8. Save the files and close them.

9. Finally, start the development server by running the following command in the terminal:

```
npm start
```

This will start the React development server and open your app in the browser.

That's it! You should now see your React app running with the provided code.
