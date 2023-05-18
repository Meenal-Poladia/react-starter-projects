const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        app: "./src/popup/app.tsx",
        pomodoroTimer: "./src/contentScriptInReact/contentScriptInReact.js",
        background: [
            "./src/popup/backgroundScripts/background.js",
            "./src/popup/backgroundScripts/background123.js",
        ],
        content: [
            "./src/popup/contentScripts/content.js",
            "./src/popup/contentScripts/content123.js",
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: `[name].js`,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/popup/index.html",
            filename: "index.html",
            excludeChunks: ["background", "content", "pomodoroTimer"]
        }),
        new CopyPlugin({
            patterns: [
                { from: "public" },
            ],
        }),
        new HtmlWebpackPlugin({
            template: "./src/contentScriptInReact/contentScriptInReact.html",
            filename: "contentScriptInReact.html",
            excludeChunks: ["background", "content", "app"]
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$|jsx/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ],
                    }
                }
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
        ],
    },
};