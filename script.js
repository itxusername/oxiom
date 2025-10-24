// Simulated PNL data for wallet 26fVqwyuQn6v1GmPtnN7mTBmNPoWiktNxCcUdQKaFAwW (from Solscan)
 // Simulated based on screenshot: Cumulative PNL rising from $0 to $280.08 (approx +0.8654 SOL gain)
const pnlData = {
    labels: ['Oct 21 05:49 PM', 'Oct 21 09:00 PM', 'Oct 22 12:00 AM', 'Oct 22 12:14 AM'],
    datasets: [{
        label: 'Grok AI Wallet PNL',
        data: [0, 80, 160, 280.08],  // Simulated cumulative PNL in USD
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

// Dynamic SOL price fetch (Dexscreener)
const solMint = 'So11111111111111111111111111111111111111112';

async function fetchSolPrice() {
    try {
        const resp = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${solMint}`);
        const data = await resp.json();
        const pair = data.pairs?.[0] || {};
        const priceUsd = pair.priceUsd || 'N/A';
        document.getElementById('sol-price').innerText = `$${priceUsd}`;
    } catch (e) {
        console.error('Error fetching SOL price:', e);
        document.getElementById('sol-price').innerText = 'Error loading price';
    }
}

// Fetch on load and every 60s
fetchSolPrice();
setInterval(fetchSolPrice, 60000);
