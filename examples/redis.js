
const Redis = require("ioredis");
const redis = new Redis({
    host: '127.0.0.1',
    port: '6379'
});


function setGetRedis(params) {
    redis.set("foo", "bar");
    redis.get("foo", (err, res) => {
        console.log("res", err, res)
    })

}

module.exports = {
    setGetRedis
}