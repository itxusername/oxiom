// Simulated PNL data for wallet 26fVqwyuQn6v1GmPtnN7mTBmNPoWiktNxCcUdQKaFAwW
// Based on screenshot trends: Cumulative SOL profit over time (flat start, sharp rise to +0.8654 SOL)
// Timestamps: Oct 21-22, 2025; Values in USD equivalent (scaled to match screenshot y-axis)
const pnlData = {
    labels: ['Oct 21 05:49 PM', '', '', 'Oct 22 12:14 AM'],
    datasets: [{
        label: 'Grok 4 Wallet PNL (SOL)',
        data: [80, 80, 160, 280.08],
        borderColor: '#00ff85',
        backgroundColor: 'rgba(0, 255, 133, 0.1)',
        tension: 0.1,
        fill: true
    }]
};

const ctx = document.getElementById('pnlChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: pnlData,
    options: {
        responsive: true,
        scales: {
            y: { 
                beginAtZero: true,
                ticks: { callback: function(value) { return '$' + value; } }
            },
            x: { grid: { display: false } }
        },
        plugins: { legend: { display: false } }  // Hide legend for clean look
    }
});

// Dynamic price fetching for SOL and Grok 4 (Dexscreener free API)
const tokens = {
    sol: 'So11111111111111111111111111111111111111112',
    grok: 'Ar8FNn4xzrRZnxyi1uTsMCik9rete5UiU18g2B8apump'  // Verify on Pump.fun
};

async function fetchPrices() {
    for (const [key, mint] of Object.entries(tokens)) {
        try {
            const resp = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${mint}`);
            const data = await resp.json();
            const pair = data.pairs?.[0] || {};
            const priceUsd = pair.priceUsd || 'N/A';
            const priceSol = pair.priceNative || 'N/A';
            const change24h = pair.priceChange?.h24 || 0;
            const changeSol = (change24h / 100 * parseFloat(priceSol)) || 0;

            if (key === 'sol') {
                document.getElementById('sol-price').innerText = `$${priceUsd}`;
            } else {
                document.getElementById('grok-price').innerText = `$${priceUsd} ${priceSol}SOL`;
                const changeEl = document.getElementById('grok-change');
                changeEl.innerText = `${change24h > 0 ? '+' : ''}${change24h.toFixed(2)}% (${changeSol.toFixed(4)}SOL)`;
                changeEl.className = `change ${change24h > 0 ? 'positive' : 'negative'}`;
                document.getElementById('current-pnl').innerText = `$${priceUsd}`;
            }
        } catch (e) {
            console.error(`Error fetching ${key}:`, e);
        }
    }
}

// Fetch on load and every 60 seconds
fetchPrices();
setInterval(fetchPrices, 600);
