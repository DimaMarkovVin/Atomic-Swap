var Web3 = require('web3');
var tx = require('ethereumjs-tx');
var web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/Urg5jjmHkL3Vqkh2WT69 '));
var address = '0xF3615d88e54d28382F3b02e37804D71f1F9FB278';
var key ='d2da3f28bcd3e2bb3614d9d45a528ddd5d7e3cd1305f52eed0b229568799e68e';
var bytecode = '0x6060604052341561000f57600080fd5b60405161069038038061069083398101604052808051820191906020018051906020019091908051906020019091908051906020019091905050836000908051906020019061005f9291906100fd565b50826001816000191690555081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060038190555033600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050506101a2565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061013e57805160ff191683800117855561016c565b8280016001018555821561016c579182015b8281111561016b578251825591602001919060010190610150565b5b509050610179919061017d565b5090565b61019f91905b8082111561019b576000816000905550600101610183565b5090565b90565b6104df806101b16000396000f300606060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806352a82b651461007a57806354fd4d50146100ab578063590e1ae314610139578063614d85e11461016657806384b366dc1461018f578063f3fe12c9146101e4575b005b341561008557600080fd5b61008d610259565b60405180826000191660001916815260200191505060405180910390f35b34156100b657600080fd5b6100be61025f565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100fe5780820151818401526020810190506100e3565b50505050905090810190601f16801561012b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561014457600080fd5b61014c6102fd565b604051808215151515815260200191505060405180910390f35b341561017157600080fd5b6101796103a7565b6040518082815260200191505060405180910390f35b341561019a57600080fd5b6101a26103ad565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101ef57600080fd5b61023f600480803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506103d3565b604051808215151515815260200191505060405180910390f35b60015481565b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102f55780601f106102ca576101008083540402835291602001916102f5565b820191906000526020600020905b8154815290600101906020018083116102d857829003601f168201915b505050505081565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561035b57600080fd5b600354421015151561036c57600080fd5b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b60035481565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006002826000604051602001526040518082805190602001908083835b60208310151561041657805182526020820191506020810190506020830392506103f1565b6001836020036101000a03801982511681845116808217855250505050505090500191505060206040518083038160008661646e5a03f1151561045857600080fd5b505060405180519050600019166001546000191614151561047857600080fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff00a165627a7a7230582067ffb78cf25e62eec2b64a2d2ea86ed11218bd402495ca9f75bffa1089f401110029';
var interface =[
    {
      "constant": true,
      "inputs": [],
      "name": "digest",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "version",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "refund",
      "outputs": [
        {
          "name": "result",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "timeOut",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "dest",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_hash",
          "type": "string"
        }
      ],
      "name": "claim",
      "outputs": [
        {
          "name": "result",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor",
      "inputs": [
        {
          "name": "_version",
          "type": "string"
        },
        {
          "name": "_digest",
          "type": "bytes32"
        },
        {
          "name": "_dest",
          "type": "address"
        },
        {
          "name": "_timeOut",
          "type": "uint256"
        }
      ]
    },
    {
      "payable": true,
      "stateMutability": "payable",
      "type": "fallback"
    }
  ];

function sendRaw(rawTx) {
    var privateKey = new Buffer(key, 'hex');
    var transaction = new tx(rawTx);
    transaction.sign(privateKey);
    var serializedTx = transaction.serialize().toString('hex');
    web3.eth.sendRawTransaction(
    '0x' + serializedTx, function(err, result) {
        if(err) {
            console.log(err);
        } else {
            console.log(result);
        }
    });
}

var myContract = web3.eth.contract(interface);
var byteCodeWithParam = myContract.new.getData("0.0.1","0x646c43aa8a9259e141b7d067485a45abdd9ad5c617124474af55dd76d35f04b6", "0x067004b21Bb502c393c652f61A9D2e8923Bc7dA3", 1516800240, {data: bytecode});

var rawTx = {
    nonce: web3.toHex(web3.eth.getTransactionCount(address)),
    gasLimit: web3.toHex(1500000),
    gasPrice: web3.toHex(80000000),
    data: byteCodeWithParam
};
sendRaw(rawTx);