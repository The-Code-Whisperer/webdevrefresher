function delayedColorChange(color, time) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            rej();
        }, time);
    })
}


// delayedColorChange('red', 1000)
//     .then(function() { return delayedColorChange('blue', 1000) })
//     .then(function() { return delayedColorChange('orange', 1000) })
//     .then(function() { return delayedColorChange('yellow', 1000) })
//     .then(function() { delayedColorChange('blue', 1000) });

async function rainbow() {
    await delayedColorChange('purple', 700);
    await delayedColorChange('orange', 700);
    await delayedColorChange('blue', 700);
    await delayedColorChange('violet', 700);
    return "all done?";
}

async function printRainbow() {
    let result = await rainbow();
    console.log(result)
    try {

    } catch (e) {
        
    }
}

printRainbow();