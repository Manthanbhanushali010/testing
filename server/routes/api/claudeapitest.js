const express = require('express');
const router = express.Router();
const axios = require('axios');
const { 
  EthMainnet, 
  PolygonMainnet, 
  BscMainnet, 
  ArbitrumMainnet, 
  Avalanche 
} = require('../../config/constant');

// Mock smart contract data for demonstration
const mockContractData = {
  ethereum: {
    name: "Ethereum Token",
    symbol: "ETH",
    decimals: 18,
    totalSupply: "120000000000000000000000000",
    contractAddress: "0x0000000000000000000000000000000000000000"
  },
  polygon: {
    name: "Polygon Token",
    symbol: "MATIC",
    decimals: 18,
    totalSupply: "10000000000000000000000000000",
    contractAddress: "0x0000000000000000000000000000000000000001"
  },
  bsc: {
    name: "Binance Coin",
    symbol: "BNB",
    decimals: 18,
    totalSupply: "200000000000000000000000000",
    contractAddress: "0x0000000000000000000000000000000000000002"
  }
};

// @route    GET api/claudeapitest/demo
// @desc     Demo endpoint to showcase API functionality
// @access   Public
router.get('/demo', async (req, res) => {
  try {
    console.log('\n=== Claude API Test Demo ===');
    console.log('This endpoint demonstrates smart contract interaction capabilities.');
    console.log('Available endpoints:');
    console.log('- GET /api/claudeapitest/demo');
    console.log('- GET /api/claudeapitest/network/:network');
    console.log('- GET /api/claudeapitest/token/:network');
    console.log('- GET /api/claudeapitest/health');
    console.log('============================\n');

    res.json({
      message: 'Claude API Test - Smart Contract Integration Demo',
      status: 'success',
      supportedNetworks: ['ethereum', 'polygon', 'bsc', 'arbitrum', 'avalanche'],
      endpoints: {
        demo: '/api/claudeapitest/demo',
        networkInfo: '/api/claudeapitest/network/:network',
        tokenInfo: '/api/claudeapitest/token/:network',
        healthCheck: '/api/claudeapitest/health'
      },
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error in demo endpoint:', error);
    res.status(500).json({ error: 'Demo endpoint failed' });
  }
});

// @route    GET api/claudeapitest/network/:network
// @desc     Get network information
// @access   Public
router.get('/network/:network', async (req, res) => {
  try {
    const { network } = req.params;
    let networkInfo;
    let rpcUrl;

    switch (network.toLowerCase()) {
      case 'ethereum':
        networkInfo = {
          name: 'Ethereum Mainnet',
          chainId: 1,
          currency: 'ETH',
          explorer: 'https://etherscan.io'
        };
        rpcUrl = EthMainnet;
        break;
      case 'polygon':
        networkInfo = {
          name: 'Polygon Mainnet',
          chainId: 137,
          currency: 'MATIC',
          explorer: 'https://polygonscan.com'
        };
        rpcUrl = PolygonMainnet;
        break;
      case 'bsc':
        networkInfo = {
          name: 'BSC Mainnet',
          chainId: 56,
          currency: 'BNB',
          explorer: 'https://bscscan.com'
        };
        rpcUrl = BscMainnet;
        break;
      case 'arbitrum':
        networkInfo = {
          name: 'Arbitrum Mainnet',
          chainId: 42161,
          currency: 'ETH',
          explorer: 'https://arbiscan.io'
        };
        rpcUrl = ArbitrumMainnet;
        break;
      case 'avalanche':
        networkInfo = {
          name: 'Avalanche C-Chain',
          chainId: 43114,
          currency: 'AVAX',
          explorer: 'https://snowtrace.io'
        };
        rpcUrl = Avalanche;
        break;
      default:
        return res.status(400).json({ error: 'Unsupported network' });
    }

    console.log(`\n=== ${networkInfo.name} Network Info ===`);
    console.log(`Chain ID: ${networkInfo.chainId}`);
    console.log(`Currency: ${networkInfo.currency}`);
    console.log(`Explorer: ${networkInfo.explorer}`);
    console.log(`RPC URL: ${rpcUrl}`);
    console.log(`===================================\n`);

    res.json({
      network: networkInfo.name,
      chainId: networkInfo.chainId,
      currency: networkInfo.currency,
      explorer: networkInfo.explorer,
      rpcUrl: rpcUrl,
      status: 'active',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error fetching network info:', error);
    res.status(500).json({ error: 'Failed to fetch network information' });
  }
});

// @route    GET api/claudeapitest/token/:network
// @desc     Get token information from smart contract (mock data)
// @access   Public
router.get('/token/:network', async (req, res) => {
  try {
    const { network } = req.params;
    const tokenData = mockContractData[network.toLowerCase()];

    if (!tokenData) {
      return res.status(400).json({ error: 'Unsupported network' });
    }

    console.log(`\n=== Token Information (${network.toUpperCase()}) ===`);
    console.log(`Contract Address: ${tokenData.contractAddress}`);
    console.log(`Token Name: ${tokenData.name}`);
    console.log(`Token Symbol: ${tokenData.symbol}`);
    console.log(`Decimals: ${tokenData.decimals}`);
    console.log(`Total Supply: ${tokenData.totalSupply}`);
    console.log(`==========================================\n`);

    res.json({
      network: network.toLowerCase(),
      tokenInfo: {
        name: tokenData.name,
        symbol: tokenData.symbol,
        decimals: tokenData.decimals,
        totalSupply: tokenData.totalSupply,
        contractAddress: tokenData.contractAddress
      },
      smartContractCall: {
        method: 'ERC-20 Token Contract',
        functions: ['name()', 'symbol()', 'decimals()', 'totalSupply()'],
        status: 'simulated'
      },
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error fetching token info:', error);
    res.status(500).json({ error: 'Failed to fetch token information' });
  }
});

// @route    GET api/claudeapitest/health
// @desc     Health check endpoint
// @access   Public
router.get('/health', async (req, res) => {
  try {
    console.log('\n=== Health Check ===');
    console.log('API Status: Healthy');
    console.log('Timestamp:', new Date().toISOString());
    console.log('====================\n');

    res.json({
      status: 'healthy',
      message: 'Claude API Test is running successfully',
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      endpoints: {
        demo: '/api/claudeapitest/demo',
        network: '/api/claudeapitest/network/:network',
        token: '/api/claudeapitest/token/:network',
        health: '/api/claudeapitest/health'
      }
    });

  } catch (error) {
    console.error('Error in health check:', error);
    res.status(500).json({ error: 'Health check failed' });
  }
});

// @route    POST api/claudeapitest/simulate-contract-call
// @desc     Simulate smart contract function call
// @access   Public
router.post('/simulate-contract-call', async (req, res) => {
  try {
    const { network, contractAddress, functionName, parameters } = req.body;

    console.log(`\n=== Smart Contract Call Simulation ===`);
    console.log(`Network: ${network}`);
    console.log(`Contract Address: ${contractAddress}`);
    console.log(`Function: ${functionName}`);
    console.log(`Parameters: ${JSON.stringify(parameters)}`);
    console.log(`======================================\n`);

    // Simulate contract call results
    const simulationResult = {
      success: true,
      result: `Function ${functionName} executed successfully`,
      gasUsed: Math.floor(Math.random() * 100000) + 21000,
      transactionHash: `0x${Math.random().toString(16).substr(2, 64)}`,
      blockNumber: Math.floor(Math.random() * 1000000) + 18000000
    };

    res.json({
      network,
      contractAddress,
      functionCall: {
        name: functionName,
        parameters: parameters || [],
        result: simulationResult.result,
        gasUsed: simulationResult.gasUsed,
        transactionHash: simulationResult.transactionHash,
        blockNumber: simulationResult.blockNumber
      },
      simulation: true,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error simulating contract call:', error);
    res.status(500).json({ error: 'Contract call simulation failed' });
  }
});

module.exports = router; 