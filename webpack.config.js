// https://github.com/ChainSafe/web3.js#web3-and-create-react-app
module.exports = {
  resolve: {
    fallback: {
      stream: require.resolve("stream-browserify"),
      //   crypto: require.resolve("crypto-browserify"),
      https: require.resolve("https-browserify"),
      http: require.resolve("stream-http"),
    },
  },
};
