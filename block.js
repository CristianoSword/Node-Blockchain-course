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
                lastHash = ${this.lasthash}
                hash = ${this.hash}
                data = ${this.data}`;
    }
}