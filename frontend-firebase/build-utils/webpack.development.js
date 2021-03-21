var path = require("path");

module.exports = () => ({
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
            },
            {
                test: path.join(__dirname, "."),
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            plugins: ["@babel/plugin-proposal-class-properties"],
                        },
                    },
                ],
            },
        ],
    },
});
