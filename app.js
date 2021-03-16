// turn fetch's double promise then model into onto one promise with axios library.


// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(data => { console.log(data.data.ticker.price) })
//     .catch(e => console.log(e));


const getBitcoinPrice = async() => {
    try {
        const result = await axios.get("https://api.cryptonator.com/api/ticker/btc-usd");
        console.log(result.data.ticker.price);
    } catch {
        console.log("error")
    }

}

let jokes = document.querySelector("#jokes");

const getDadJoke = async() => {
    const config = {
        headers: { Accept: 'application/json' }
    }
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    return res.data.joke;
}


document.querySelector("#getJoke").addEventListener("click", function () {
    getDadJoke();
})