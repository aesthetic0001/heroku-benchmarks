const axios = require("axios");

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
