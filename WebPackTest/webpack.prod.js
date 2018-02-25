const webpack = require("webpack");
const Merge = require("webpack-merge");
const CommonConfig = require("./webpack.common.js");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const __SCRIPTS_VERSION__="v6.2.1.4";
// Images, Fonts Loading: https://webpack.js.org/guides/asset-management/
// LESS Loading: https://webpack.js.org/loaders/less-loader/
// Code splitting: https://webpack.js.org/guides/code-splitting
// Caching: https://webpack.js.org/guides/caching/

const extractLess = new ExtractTextPlugin({
    filename: "[name]."+__SCRIPTS_VERSION__+".css"
});

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
        filename: "[name]."+__SCRIPTS_VERSION__+".js"

    },

    module: {
        loaders: [
            // All css files will be handled here
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({ fallback: "style-loader", use: ["css-loader"] })
            },

            // All files with ".less" will be handled and transpiled to css
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader", options: {
                            sourceMap: true
                        }
                    }, {
                        loader: "less-loader", options: {
                            sourceMap: true
                        }
                    }]
                })
            },
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("production")
            }
        }),

       
        // Split out library into seperate bundle and remove from app bundle.
        //new webpack.HashedModuleIdsPlugin(),

              
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor"
        }),

        // Webpack boilerplate and manifest in seperate file.
        new webpack.optimize.CommonsChunkPlugin({
            name: "manifest"
        }),

        // Write out CSS bundle to its own file:
        extractLess,
        
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),

        /*new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false
        })*/
    ]
})