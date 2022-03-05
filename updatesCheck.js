const axios = require("axios");
const {Worker} = require('worker_threads')

for (let i = 0; i < 2; i++) {
    new Worker('./thread.js')
}

// method 1
async function main() {
    const startTime = performance.now()
    await axios.get("https://api.hypixel.net/skyblock/auctions?page=0").catch((e) => {
        console.log(e)
    })
    console.log(performance.now() - startTime)
}

async function doMain() {
    while (true) {
        await main()
    }
}

doMain()


