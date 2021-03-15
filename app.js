const req = new XMLHttpRequest();

req.onload = function() {
    console.log("all done with request");
    let data = JSON.parse(this.responseText);
    console.log(data.ticker.price);
}

req.onerror = function () {
    console.log("error!");
    console.log(this);
}

req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd');
req.send();


// XMLhttprequests suck because they have all this up time but on the other hand you won't need to use fetch which requires a chain of 2 promises since the first one returns quickly preloaded info.
