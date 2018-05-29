const SLEEP_MS = 1000;

function sleep() {
    return new Promise(resolve => setTimeout(resolve, SLEEP_MS));
}

module.exports = sleep;