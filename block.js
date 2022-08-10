const SHA256 = require('crypto-js/sha256');

class Block {

    constructor(timestamp, lasthash, hash, data) {
        this.timestamp = timestamp;
        this.lasthash = lasthash;
        this.hash = hash;
        this.data = data;
    }

    toString() {
        return `Block =
                Timestamp = ${this.timestamp}
                lastHash = ${this.lasthash.substring(0,10)}
                hash = ${this.hash.substring(0,10)}
                data = ${this.data}`;
    }

    static genesis() {
        
        return new this('Genesis time', '--------', 'ejrfb34iubrjwbf', []);
    }

    static mineBlock(lastBlock, data) {
        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        const hash = 'a-fazer-hash';

        return new this (timestamp, lastHash, hash, data);
    }

    static hash (timestamp, lastHash, data) {
        return SHA256(`${timestamp}${lastHash}${data}`).toString();
    }
    // SHA - 256
}

module.exports = Block;

