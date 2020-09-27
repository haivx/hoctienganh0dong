const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const Htmlwebpackplugins = require("html-webpack-plugin");
const tailwindcss = require("tailwindcss");
const path = require("path");

const modeConfig = (mode) => require(`./build-utils/webpack.${mode}`)(mode);
const presetConfig = require("./build-utils/loadPresets");

module.exports = ({ mode = "production", presets = [] }) => {
    return webpackMerge(
        {
            entry: "./index.js",
            output: {
                path: __dirname + "/dist",
                filename: "bundle.js",
            },
            mode: mode,
            module: {
                rules: [
                    {
                        test: /\.(js|jsx)$/i,
                        exclude: /node_modules/,
                        use: {
                            loader: "babel-loader",
                        },
                    },
                    {
                        test: /\.(png|jpg|jpeg|gif)$/i,
                        use: [
                            {
                                loader: "url-loader",
                                options: {
                                    limit: 2500,
                                },
                            },
                        ],
                    },
                ],
            },
            devServer: {
                historyApiFallback: true,
            },
            plugins: [
                new webpack.ProgressPlugin(),
                new Htmlwebpackplugins({
                    template: "./public/index.html",
                    filename: "./index.html",
                }),
            ],
            resolve: {
                alias: {
                    Components: path.resolve(__dirname, "src/components/"),
                    Containers: path.resolve(__dirname, "src/containers"),
                    Styles: path.resolve(__dirname, "src/styles"),
                    Utils: path.resolve(__dirname, "src/utils"),
                },
            },
        },
        modeConfig(mode),
        presetConfig({ mode, presets })
    );
};
