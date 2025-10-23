async function fetchHistorical(mint) {
    const resp = await fetch(`https://deep-index.moralis.io/api/v2.2/market-data/erc20s/prices?chain=solana&token_addresses=${mint}`, {
        headers: { 'X-API-Key': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjExNjBhMmJhLWFjYzgtNDQxNi1iZWU3LWM0ZDVmZDZjNDdmZSIsIm9yZ0lkIjoiNDc3NDU4IiwidXNlcklkIjoiNDkxMjIwIiwidHlwZUlkIjoiYmI0MTk3YzEtNDlkYS00ODdlLTllMTQtYTEzNzQ2YzdhZThkIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3NjEyNDcwNzEsImV4cCI6NDkxNzAwNzA3MX0.R80M_W0KFIwJe96tWBMplEIrjJVMDZZHPZCCdtUqang' }
    });
    const data = await resp.json();
    // Update chartData.datasets[0].data with parsed prices
}
