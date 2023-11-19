const HDWalletProvider = require('@truffle/hdwallet-provider');
const { Web3 } = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
    'viable priority middle arrive photo address squeeze dignity fury oblige dignity indicate',
    'https://sepolia.infura.io/v3/38dc49a1da684d449c8618c9cf53ab15'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: compiledFactory.bytecode })
        .send({ gas: '1000000', from: accounts[0] });

    console.log(compiledFactory.interface);
    console.log("Contract deployed to", result.options.address);
    provider.engine.stop();
};
deploy();
