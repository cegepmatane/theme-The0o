const path = require('path');

module.exports = {
  // Autres configurations webpack...

  resolve: {
    fallback: {
      "crypto": require.resolve("crypto-browserify"),
      "url": require.resolve("url/")
    }
  }
};
