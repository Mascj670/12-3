document.getElementById('stockForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const symbol = document.getElementById('stockSymbol').value;
    fetch(`/stockprice?symbol=${symbol}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('stockData').innerText = `Price of ${symbol}: $${data.price}`;
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
