require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give glove fresh speak notice crime remember slow heavy armed flame supply'; 
let testAccounts = [
"0x75e83c1990f05be270c546d3046bb7b3ddf4a01be4a3338a8101527d4d3410a3",
"0x8f1ae2b37d7db52a76e4e168eaa00a974ca42f0b060afa8527327923eeae821c",
"0x7145d3b0e36f77655b54f317f3ebebbd1b6cb2f217fae07675619f683147207f",
"0x4024c4f0cecbd5795f5f888a7d625d4f7bcc8faf4356758bffaa8e699fd1e351",
"0xc0437ea3e215a35db804398cc72e772e43a31b9d523412ff67524081538163f4",
"0x16be89fd4cc517a1880cde9b627a5c3300f8c4b8af15b382d975e87cd6897cac",
"0xc92065129d8751c22d4195ba620a8e9081824d72f69e954da0b223178264842a",
"0x0a7db83badd8b3543277be7a7dda353ff4eccbb69b749599dc4573ccdee5977c",
"0x7204b37d7ea399d06e5ec19a2300b131c241845e6287ce7aa0f89c5d5da40cd9",
"0x4a03464c38b87bea3ed0c6e4b57b4c6e0e555725e3ea325bfbe07797fbb124cf"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
