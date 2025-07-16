# API Testing Commands

## Setup
```bash
cd "/Users/manthanbhanushali/blockchain developer test /testing"
pwd
ls package.json
npm start
```

## Test Endpoints

```bash
# Demo endpoint
curl -X GET http://localhost:5025/api/manthanapitest/demo

# Network info
curl -X GET http://localhost:5025/api/manthanapitest/network/ethereum
curl -X GET http://localhost:5025/api/manthanapitest/network/polygon
curl -X GET http://localhost:5025/api/manthanapitest/network/bsc

# Token info
curl -X GET http://localhost:5025/api/manthanapitest/token/ethereum
curl -X GET http://localhost:5025/api/manthanapitest/token/polygon

# Contract simulation
curl -X POST http://localhost:5025/api/manthanapitest/simulate-contract-call \
  -H "Content-Type: application/json" \
  -d '{
    "network": "ethereum",
    "contractAddress": "0x1234567890123456789012345678901234567890",
    "functionName": "balanceOf",
    "parameters": ["0xabcdef1234567890123456789012345678901234"]
  }'

# Health check
curl -X GET http://localhost:5025/api/manthanapitest/health
``` 