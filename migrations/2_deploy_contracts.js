
const PaymentContract = artifacts.require("PaymentContract");

module.exports = function (deployer) {
  // Deploy the contract with only the farmer's and buyer's addresses
  deployer.deploy(PaymentContract, "0x99Cd983703a90d6DF5326333Fb7186c0Baf0D09B", "0x28FF15e5840ED3ef0e1AbDC8332a3331168E88a3");
};
