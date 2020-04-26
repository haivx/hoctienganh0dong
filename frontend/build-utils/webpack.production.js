const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = () => ({
    devtool: "nosources-source-map",
    output: {
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [new MiniCssExtractPlugin()],
});
