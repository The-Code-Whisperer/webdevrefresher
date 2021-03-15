


// fetch using callbacks

// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log("Response, waiting to parse...", res);
//         return res.json();
//     })
//     .then(data => {
//         console.log("DATA PARSED...", data.ticker.price);
//     })
//     .catch(e => {
//         console.log("OH NO! ERROR!", e);
//     })


// fetch using async await

const fetchBitcoinPrice = async () => {
     const res = await fetch("https://api.cryptonator.com/api/ticker/btc-usd");
     console.log(res);
}
fetchBitcoinPrice();
