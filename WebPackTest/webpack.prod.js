const webpack = require("webpack");
const Merge = require("webpack-merge");
const CommonConfig = require("./webpack.common.js");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// Images, Fonts Loading: https://webpack.js.org/guides/asset-management/
// LESS Loading: https://webpack.js.org/loaders/less-loader/
// Code splitting: https://webpack.js.org/guides/code-splitting
// Caching: https://webpack.js.org/guides/caching/


module.exports = Merge(CommonConfig, {
    devtool: "hidden-source-map",

    entry: {
        vendor: [
            "jquery",
            "jquery-validation",
            "bootstrap",
            "jquery-validation-unobtrusive"
        ]
    },

    output: {
        filename: "[name].v6.2.1.4.js"
        
    },

    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("production")
            }
        }),

        // // Split out library into seperate bundle and remove from app bundle.
        // new webpack.HashedModuleIdsPlugin(),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: "vendor"
        // }),
        //
        // // Webpack boilerplate and manifest in seperate file.
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: "runtime"
        // }),

        // Write out CSS bundle to its own file:
       /* extractLess,*/

        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),

        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false
        })
    ]
})