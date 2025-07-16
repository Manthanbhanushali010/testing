# Manthan API Test

## Overview
API for smart contract integration with multiple blockchain networks.

**Developer**: Manthan Bhanushali  
**API Name**: manthanapitest  
**Base URL**: `http://localhost:5025/api/manthanapitest`

## Supported Networks
- Ethereum (ethereum)
- Polygon (polygon)
- BSC (bsc)
- Arbitrum (arbitrum)
- Avalanche (avalanche)

## Endpoints

### GET /api/manthanapitest/demo
Returns API overview with supported networks and endpoints.

### GET /api/manthanapitest/network/:network
Returns network information for specified blockchain.

Parameters:
- network: ethereum, polygon, bsc, arbitrum, avalanche

### GET /api/manthanapitest/token/:network
Returns ERC-20 token contract simulation data.

Parameters:
- network: ethereum, polygon, bsc, arbitrum, avalanche

### GET /api/manthanapitest/health
Returns API health status.

### POST /api/manthanapitest/simulate-contract-call
Simulates smart contract function calls.

Request body:
```json
{
  "network": "ethereum",
  "contractAddress": "0x1234567890123456789012345678901234567890",
  "functionName": "balanceOf",
  "parameters": ["0xabcdef1234567890123456789012345678901234"]
}
```

## Testing
Use curl commands to test all endpoints. Server runs on port 5025.

## Implementation Notes
- Uses existing network configurations from server/config/constant.js
- Implements console logging for all API calls
- Includes error handling and validation
- Built on Express.js framework 