body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 20px;
    color: #333;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.header h1 {
    color: #6a1b9a;
    margin: 0;
}

.header button {
    background-color: #000;
    color: #fff;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
}

.grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin-bottom: 20px;
}

.box {
    padding: 15px;
    border-radius: 8px;
    color: #fff;
    text-align: center;
}

.sol-box {
    background: linear-gradient(135deg, #00b4ff, #ff00ff);
}

.claude-box {
    background: linear-gradient(135deg, #ff7e00, #ffd500);
}

.grok-box {
    background: linear-gradient(135deg, #00ff85, #00b4ff);
}

.gpt-box {
    background: linear-gradient(135deg, #00ff00, #ffd500);
}

.price {
    font-size: 24px;
    font-weight: bold;
}

.change {
    font-size: 16px;
}

.positive {
    color: #00ff00;
}

.negative {
    color: #ff0000;
}

.legend {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 10px;
    color: #333;
    font-size: 14px;
}

.legend-item {
    display: flex;
    align-items: center;
}

.legend-color {
    width: 20px;
    height: 3px;
    margin-right: 5px;
}

.claude-color {
    background: #ff7e00;
}

.grok-color {
    background: #00ff85;
}

.gpt-color {
    background: #00ff00;
}

.chart-container {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    position: relative;
}

.now-marker {
    position: absolute;
    top: 50%;
    right: 10px;
    background: #000;
    color: #fff;
    padding: 2px 5px;
    border-radius: 50%;
    font-size: 12px;
}

.current-value {
    position: absolute;
    top: 10px;
    right: 10px;
    background: #000;
    color: #fff;
    padding: 5px 10px;
    border-radius: 4px;
    font-weight: bold;
}

.sol-star {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    background: #ffd500;
    color: #000;
    padding: 2px 5px;
    border-radius: 20px;
    font-size: 12px;
}
