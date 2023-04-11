import { NotImplementedError } from "../extensions/index.js";

const chainMaker = {
  chain_array: [],
  getLength() {
    return this.chain_array.length;
  },
  addLink(value) {
    if (typeof value == "undefined") {
      value = "";
    }
    if (value == null) {
      value = "null";
    }
    this.chain_array.push(value);
    return this;
  },
  removeLink(position) {
    if (
      typeof position == "number" &&
      position > 0 &&
      position % 1 == 0 &&
      position <= this.chain_array.length
    ) {
      this.chain_array.splice(position - 1, 1);
      return this;
    } else {
      this.chain_array = [];
      throw new Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    this.chain_array.reverse();
    return this;
  },
  finishChain() {
    var finalstr = "( " + this.chain_array.join(" )~~( ") + " )";
    this.chain_array = [];
    return finalstr;
  },
};

module.exports = {
  chainMaker,
};
