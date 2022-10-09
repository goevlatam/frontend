const CONTRACT_ADDRESS = {
    80001: "0xb1aa3cbe1bf99c3a27ecd251341817a139f1d938"
}

const TOKEN_LIST ={
    80001: [
        {
            name: "USDT",
            symbol: "USDT",
            decimals: 18,
            address: "0x2FECf8F6c34cf49090BC9F63E85B64e3e03fB58f"
        }
    ]
}

const SCAN_URL_PREFIX = {
    80001: "https://mumbai.polygonscan.com"
}

export const getContractAddress = (chainId) => CONTRACT_ADDRESS[chainId]
export const getTokens = (chainId) => TOKEN_LIST[chainId]
export const getScanUrlPrefix = (chainId) => SCAN_URL_PREFIX[chainId]