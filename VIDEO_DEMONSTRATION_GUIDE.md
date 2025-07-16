# Video Demonstration Guide

## 🎥 Recording Instructions

### Duration: 3-5 minutes
### Format: Screen recording (1080p recommended)
### Audio: Optional narration explaining the features

## 📝 Video Script & Demonstrations

### Scene 1: Introduction (30 seconds)
**What to show:**
- Open terminal/command prompt
- Navigate to the project directory
- Show the project structure briefly

**Script:**
> "This is a demonstration of the manthanapitest API implementation for the blockchain developer assessment. I'll show the smart contract integration capabilities with multiple blockchain networks."

### Scene 2: Server Startup (30 seconds)
**What to show:**
```bash
cd testing
node server.js
```

**What to highlight:**
- Server starts successfully on port 5025
- No errors in console
- "Server started on port 5025" message

**Script:**
> "Starting the Express.js server which hosts our new API endpoints. As you can see, the server starts successfully on port 5025."

### Scene 3: Demo Endpoint (45 seconds)
**What to show:**
```bash
curl -X GET http://localhost:5025/api/manthanapitest/demo
```

**What to highlight:**
- JSON response with supported networks
- Available endpoints listed
- Console output showing the demo information

**Script:**
> "The demo endpoint provides an overview of all available functionality. It returns supported networks and endpoint documentation."

### Scene 4: Network Information (45 seconds)
**What to show:**
```bash
curl -X GET http://localhost:5025/api/manthanapitest/network/ethereum
curl -X GET http://localhost:5025/api/manthanapitest/network/polygon
```

**What to highlight:**
- Network details for different blockchains
- Console output showing network information
- Chain IDs, currencies, and explorer URLs

**Script:**
> "The network endpoint retrieves information about different blockchain networks. Here we see Ethereum mainnet details, then Polygon network information."

### Scene 5: Token Information (45 seconds)
**What to show:**
```bash
curl -X GET http://localhost:5025/api/manthanapitest/token/ethereum
curl -X GET http://localhost:5025/api/manthanapitest/token/bsc
```

**What to highlight:**
- Token contract simulation
- ERC-20 token information
- Console output showing token details

**Script:**
> "The token endpoint simulates ERC-20 smart contract interactions. We can see token names, symbols, decimals, and total supply information."

### Scene 6: Health Check (30 seconds)
**What to show:**
```bash
curl -X GET http://localhost:5025/api/manthanapitest/health
```

**What to highlight:**
- API health status
- Server uptime
- Available endpoints summary

**Script:**
> "The health endpoint provides API status monitoring, showing the server is healthy and running for X seconds."

### Scene 7: Smart Contract Simulation (60 seconds)
**What to show:**
```bash
curl -X POST http://localhost:5025/api/manthanapitest/simulate-contract-call \
  -H "Content-Type: application/json" \
  -d '{
    "network": "ethereum",
    "contractAddress": "0x123456789abcdef",
    "functionName": "transfer",
    "parameters": ["0xabc123", "1000000000000000000"]
  }'
```

**What to highlight:**
- POST request with JSON payload
- Smart contract function simulation
- Transaction details in response (gas used, transaction hash, block number)
- Console output showing simulation details

**Script:**
> "The smart contract simulation endpoint demonstrates calling contract functions. We're simulating a transfer function call, and the response includes transaction details like gas used and transaction hash."

### Scene 8: Console Output Focus (30 seconds)
**What to show:**
- Switch focus to server console
- Show accumulated console logs from all requests
- Point out different log formats for each endpoint

**Script:**
> "As required, all API calls produce detailed console output. Here you can see the comprehensive logging for each endpoint that was called."

### Scene 9: Multiple Networks Demo (45 seconds)
**What to show:**
```bash
curl -X GET http://localhost:5025/api/manthanapitest/network/arbitrum
curl -X GET http://localhost:5025/api/manthanapitest/network/avalanche
curl -X GET http://localhost:5025/api/manthanapitest/token/polygon
```

**What to highlight:**
- Multiple blockchain networks working
- Different network configurations
- Consistent API response format

**Script:**
> "The API supports multiple blockchain networks - here we're testing Arbitrum, Avalanche, and Polygon, showing the multi-chain capabilities."

### Scene 10: Error Handling (30 seconds)
**What to show:**
```bash
curl -X GET http://localhost:5025/api/manthanapitest/network/invalidnetwork
curl -X GET http://localhost:5025/api/manthanapitest/token/unsupported
```

**What to highlight:**
- Proper error responses
- 400 status codes for unsupported networks
- Error handling in console

**Script:**
> "The API includes comprehensive error handling. When requesting unsupported networks, we get proper error responses."

### Scene 11: Conclusion (30 seconds)
**What to show:**
- Summary of what was demonstrated
- Show file structure briefly
- Highlight key files created

**Script:**
> "This concludes the demonstration. We've shown a complete smart contract integration API with 5 endpoints, multi-network support, detailed console logging, and proper error handling. All assessment requirements have been met."

## 🎯 Key Points to Emphasize

### 1. **Console Output** (Critical Requirement)
- Show console logs for every API call
- Emphasize the detailed information displayed
- Point out different log formats for each endpoint

### 2. **Smart Contract Integration**
- Demonstrate ERC-20 token interactions
- Show contract function simulations
- Highlight multi-network support

### 3. **API Completeness**
- Show all 5 endpoints working
- Demonstrate GET and POST methods
- Show JSON response format

### 4. **Error Handling**
- Show error responses for invalid inputs
- Demonstrate graceful error handling
- Show console error logging

### 5. **Multi-Network Support**
- Test at least 3 different networks
- Show consistent API behavior
- Highlight network-specific information

## 📱 Technical Setup for Recording

### Screen Recording Setup:
1. **Terminal Setup**:
   - Use a dark theme terminal for better visibility
   - Increase font size to 14-16pt
   - Set terminal to full screen or large window

2. **Browser/HTTP Client**:
   - Use curl commands for simplicity
   - Consider using Postman for visual demonstration
   - Show both request and response clearly

3. **Console Monitoring**:
   - Keep server console visible
   - Use split screen or switch between windows
   - Highlight console output after each request

### Recording Tips:
- **Smooth Navigation**: Practice the commands beforehand
- **Clear Audio**: If adding narration, ensure clear audio
- **Proper Timing**: Allow time for responses to load
- **Highlight Important Parts**: Use cursor to point out key information

## 🎬 Alternative Demonstration Formats

### Option 1: Side-by-Side Recording
- Server console on left
- API testing on right
- Show both simultaneously

### Option 2: Sequential Recording
- Test endpoint first
- Then show console output
- Repeat for each endpoint

### Option 3: Postman Demonstration
- Use Postman instead of curl
- Show visual request/response
- Still emphasize console output

## 📊 Quality Checklist

Before submitting the video, ensure:

### Technical Quality:
- [ ] Video resolution is 1080p or higher
- [ ] Audio is clear (if narration included)
- [ ] No background noise or distractions
- [ ] Text is readable and properly sized

### Content Quality:
- [ ] All 5 endpoints demonstrated
- [ ] Console output clearly shown
- [ ] Error handling demonstrated
- [ ] Multi-network support shown
- [ ] Smart contract simulation working

### Presentation Quality:
- [ ] Smooth transitions between demonstrations
- [ ] Clear explanation of what's being shown
- [ ] Professional presentation
- [ ] Proper timing (not too fast or slow)

## 🎪 Final Tips

1. **Practice First**: Run through the demonstration several times
2. **Check Network**: Ensure stable internet connection
3. **Close Distractions**: Close unnecessary applications
4. **Backup Plan**: Have commands ready in a text file
5. **Test Recording**: Do a test recording to check quality

## 📋 Example Commands Sheet

Keep this handy during recording:

```bash
# Start server
node server.js

# Test all endpoints
curl -X GET http://localhost:5025/api/manthanapitest/demo
curl -X GET http://localhost:5025/api/manthanapitest/network/ethereum
curl -X GET http://localhost:5025/api/manthanapitest/network/polygon
curl -X GET http://localhost:5025/api/manthanapitest/token/ethereum
curl -X GET http://localhost:5025/api/manthanapitest/token/bsc
curl -X GET http://localhost:5025/api/manthanapitest/health
curl -X POST http://localhost:5025/api/manthanapitest/simulate-contract-call -H "Content-Type: application/json" -d '{"network":"ethereum","contractAddress":"0x123456789abcdef","functionName":"balanceOf","parameters":["0x123"]}'

# Error handling
curl -X GET http://localhost:5025/api/manthanapitest/network/invalid
```

---

**Ready for video recording** 🎬

This guide provides everything needed to create a professional demonstration video that showcases the complete implementation and meets all assessment requirements. 