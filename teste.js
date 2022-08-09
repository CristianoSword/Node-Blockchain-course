const Block = require('./block.js');

const block = new Block('666', '666sixsix', 'six666six', '666');
console.log(block.toString());
console.log(Block.genesis().toString());
const primeiroBloco = Block.mineBlock(Block.genesis(), '$500');
console.log(primeiroBloco.toString());