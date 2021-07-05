const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commoConfig = require("./webpack.common");
const packageJson = require("../package.json");

const prodConfig = {
  mode: "production",
  output: {
    //the template of the name of the archive, for caching issues
    filename: "[name].[contenthash].js",
    publicPath: "/marketing/latest/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "marketing",
      filename: "remoteEntry.js",
      exposes: {
        "./MarketingApp": "./src/bootstrap",
        "./Form": "./src/components/Form",
        "./BreadCrumbs": "./src/components/BreadCrumbs",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commoConfig, prodConfig);
