const { version } = require("../package.json");
const arbitrum = require("./tokens/arbitrum.json");

module.exports = function buildList() {
  const parsed = version.split(".");
  return {
    name: "donkswap Community",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI:
      "https://github.com/DonkSolana/donk-default-token-list/blob/main/assets/donk.png?raw=true",
    keywords: ["donkswap", "community"],
    tokens: [...arbitrum]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
  };
};
