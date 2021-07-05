const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const Htmlwebpackplugins = require("html-webpack-plugin");
const path = require("path");

const modeConfig = (mode) => require(`./build-utils/webpack.${mode}`)(mode);
const presetConfig = require("./build-utils/loadPresets");

module.exports = ({ mode = "production", presets = [] }) => {
    return webpackMerge(
        {
            entry: "./index.js",
            output: {
                publicPath: '/',
                path: path.join(__dirname, "dist"),
                filename: "[name].chunk.js",
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
                hot: true,
                host: '0.0.0.0',
                port: 5000,
                public: '0.0.0.0:5050',
                disableHostCheck: true, // this is security issue, only using in development
            },
            plugins: [
                new webpack.ProgressPlugin(),
                new Htmlwebpackplugins({
                    template: "./public/index.html",
                    filename: "./index.html",
                }),
                new webpack.HotModuleReplacementPlugin()
            ],
            resolve: {
                alias: {
                    "@components": path.resolve(__dirname, "src/components/"),
                    "@containers": path.resolve(__dirname, "src/containers"),
                    "@styles": path.resolve(__dirname, "src/styles"),
                    "@utils": path.resolve(__dirname, "src/utils"),
                    "@store": path.resolve(__dirname, "src/store"),
                    "@action": path.resolve(__dirname, "src/store/actions"),
                    "@resources": path.resolve(__dirname, "src/assets"),
                },
            },
        },
        modeConfig(mode),
        presetConfig({ mode, presets })
    );
};
