const COFFEE_THRESHOLD = 0.85;
const COFFEE_SWEETSPOT_HOUR = 14;

function isItTime() {
    let hour = new Date().getHours();
    let hourDiff = Math.abs(COFFEE_SWEETSPOT_HOUR - hour);
    let minDiff = (new Date().getMinutes() / 60);
    hourDiff += (hour >= COFFEE_SWEETSPOT_HOUR ? minDiff : -minDiff);
    let threshold = COFFEE_THRESHOLD + (hourDiff * 0.015);
    return Math.random() >= threshold;
}

module.exports = isItTime;