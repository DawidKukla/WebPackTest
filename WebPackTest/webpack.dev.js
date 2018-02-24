const path = require("path");
const webpack = require("webpack");
const Merge = require("webpack-merge");
const CommonConfig = require("./webpack.common.js");

module.exports = Merge(CommonConfig, {
    devtool: "inline-source-map",

    entry: {
        index: path.resolve(__dirname, "src/index.ts"),
        contact: path.resolve(__dirname, "src/contact.ts")
    },
    output: {
        publicPath: "/dist/",
        path: path.resolve(__dirname + "/dist"),
        filename: '[name].js',
        library: "aspAndWebpack",
        libraryTarget: "var"
    },
    
    module: {
        loaders: [
            // All css files will be handled here
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },

            // All files with ".less" will be handled and transpiled to css
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            }
        ]
    },

    plugins: ([
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("development")
            }
        })
    ]),
})