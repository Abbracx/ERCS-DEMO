const Web3 = require('web3')
const Decimal = require('decimal.js');


const web3 = new Web3(window.ethereum);

const applyDecimals = (rawValue, decimals, sign = "negative") => {
    if(!rawValue) return "";

    return Decimal(rawValue).mul(Decimal(10).pow(Decimal( sign === 'positive' ? decimals : -decimals ))).toFixed()
}

module.exports = {
    applyDecimals,
    web3
}