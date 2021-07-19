require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arctic surge short bitter birth soap unable install crisp equal gaze'; 
let testAccounts = [
"0x470f61e78a9e2dcedded8045a50c16726798093c1803df815d18d81667c290cb",
"0x53bd088a6963c12f51e06da75a19d7bfeb26e20ee3c1b6888d6ea3c41bf50944",
"0x9be143c108e9d2bacf76619866de378dc161ff4b1f9f2592ed823a860a96ccbf",
"0x37d3aced3da55940aad0a2360363877ed045cc920ae3582fb4cf749cab773bdb",
"0x110d0565998d15a42bf1f834b9424a6feed28945fbb974b07a8975266e3bc538",
"0x057ef35f9d17aca71866005eaae1d3650b3fa86215af4b7582b56225be25750f",
"0x5c7fb6f3fe4c0fb9eeef97af8ea99a3c6c1c04adb0777155f5725f77c42e2f14",
"0x66d7daf9ec4842ca5f6cd7e7a1eb3f19a510db24f54f60b37bebc08d89a0645c",
"0xd362de0e47a242761b771c719fdc6162df324aebc6af963519823ad892405669",
"0xf39d43db3f0db9605b370a634e55c5ad8750a4755e3fb23a62c60c5710304331"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


