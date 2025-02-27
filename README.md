# AgroChain
## Steps to Deploy and Use the Smart Contract  

1. **Open `server.js`**  
   - Copy and paste the buyer's and farmer's account addresses from Ganache into this file.  

2. **Modify `2_deploy_contract.js` in the `migrations` folder**  
   - Copy and paste the buyer's and farmer's account addresses into this file.  

3. **Compile and Migrate the Smart Contract**  
   - Run the following commands in the terminal:  
     ```
     truffle compile
     truffle migrate
     ```  

4. **Copy the Generated Contract Address**  
   - After running `truffle migrate`, the contract address will be displayed in the terminal.  
   - Copy and paste this contract address into `server.js`.  

5. **Copy the ABI from `Paymentcontract.json`**  
   - The ABI (Application Binary Interface) will be generated inside `Paymentcontract.json`.  
   - Paste it inside `server.js` within `[{ }]`.  

6. **Start the Project**  
   - Run the following command:  
     ```
     npm start
     ```  
   
This will successfully deploy the contract and start the project. 🚀
