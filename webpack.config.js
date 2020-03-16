const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const Htmlwebpackplugins = require('html-webpack-plugin');
const path = require('path');

const envConfig = (env) => require(`./build-utils/webpack.${env.mode}.js`)(env);

module.exports = (env) => {
    return webpackMerge({
            entry: "./index.js",
            output: {
                path: __dirname + "/dist",
                filename: "bundle.js"
            },
            mode: env.mode,
            module: {
                rules: [{
                        test: /\.(js|jsx)$/i,
                        exclude: /node_modules/,
                        use: {
                            loader: "babel-loader"
                        }
                    },
                    {
                        test: /\.(css|scss)$/i,
                        use: [{
                                loader: "css-loader",
                                options: {
                                    modules: true
                                }
                            },
                            {
                                loader: "sass-loader",
                                options: {
                                    implementation: require("node-sass")
                                }
                            }
                        ]
                    }
                ]
            },
            plugins: [new webpack.ProgressPlugin(), new Htmlwebpackplugins({
                template: "./public/index.html",
                filename: './index.html'
            })],
            resolve: {
                alias: {
                    Components: path.resolve(__dirname, 'src/components/'),
                    Containers: path.resolve(__dirname, 'src/containers'),
                    Styles: path.resolve(__dirname, 'src/styles'),
                }
            }
        },
        envConfig(env)
    );
}