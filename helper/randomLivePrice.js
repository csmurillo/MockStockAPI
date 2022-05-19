function randomLivePrice(prevValue, currentValue) {
    return (Math.random() * (parseFloat(currentValue) - parseFloat(prevValue)) + parseFloat(prevValue)).toFixed(3);
}

module.exports={randomLivePrice};