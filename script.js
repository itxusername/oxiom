// Simulated PNL data for wallet 26fVqwyuQn6v1GmPtnN7mTBmNPoWiktNxCcUdQKaFAwW (Grok AI trading example)
// Based on screenshot trends: Cumulative profit over time (flat start, sharp rise to +0.8654 SOL equivalent)
// Timestamps: Oct 21-22, 2025; Values in USD (scaled; real data from Solscan would require transaction parsing)
// Note: Free API limits prevent real-time PNL; this is a simulation based on UI trends
const pnlData = {
    labels: ['Oct 21 05:49 PM', '', '', 'Oct 22 12:14 AM'],
    datasets: [{
        label: 'Grok AI Wallet PNL (SOL)',
        data: [80, 80, 160, 280.08],  // Simulated: Low start, pump to high profit
        borderColor: '#00ff85',
        backgroundColor: 'rgba(0, 255, 133, 0.1)',
        tension: 0.1,
        fill: true
    }]
};

// Initialize Chart
document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('pnlChart').getContext('2d');
    if (ctx) {
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
                plugins: { legend: { display: false } }
            }
        });
    } else {
        console.error('Canvas element not found for PNL chart');
    }
});

// Dynamic price fetching for SOL (Dexscreener free API)
const solMint = 'So11111111111111111111111111111111111111112';

async function fetchSolPrice() {
    try {
        const resp = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${solMint}`);
        if (!resp.ok) throw new Error('API response not OK');
        const data = await resp.json();
        const pair = data.pairs?.[0] || {};
        const priceUsd = pair.priceUsd || 'N/A';
        document.getElementById('sol-price').innerText = `$${priceUsd}`;
    } catch (e) {
        console.error('Error fetching SOL price:', e);
        document.getElementById('sol-price').innerText = 'Error loading price';
    }
}

// Fetch on load and every 60 seconds
fetchSolPrice();
setInterval(fetchSolPrice, 60000);
