web3.eth.defaultAccount = web3.eth.accounts[0];
  var me = web3.eth.contract([
	{
		"constant": false,
		"inputs": [
			{
				"name": "x",
				"type": "string"
			}
		],
		"name": "sendHash",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getHash",
		"outputs": [
			{
				"name": "x",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]);
  var yes=me.at('0xEA8e0b1940AC600b3ff8594B1f961188aFe31575');
if(!web3.isConnected()) 
        {
        console.log("OOPS....web3 not connected");
        } 
  else  {
        console.log("Yes..Web3 is connected");
        }
 web3.version.getNetwork((err, netId) => {
        switch (netId) {
            case "1":
                console.log('This is mainnet')
                break
            case "2":
                console.log('This is the deprecated Morden test network.')
                break
            case "3":
                console.log('This is the ropsten test network.')
                break
            case "4":
                console.log('This is the Rinkeby test network.')
                break
            case "42":
                console.log('This is the Kovan test network.')
                break
            default:
                console.log('This is an unknown network.')
        }
    })