const express = require('express');
const liveStockPrice = require('live-stock-price');
const app = express();

app.use(express.static('public'));
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/stockprice', async (req, res) => {
  const symbol = req.query.symbol;

  if (!symbol) {
    return res.status(400).json({ error: 'Stock symbol is required' });
  }

  try {
    const price = await liveStockPrice(symbol); // Updated usage
    res.json({ symbol: symbol, price: price });
  } catch (error) {
    console.error('Error fetching stock price:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
