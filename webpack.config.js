// webpack.config.js

const path = require("path");
const BUILD_PATH = path.join(__dirname, "public/build");
// Will need to use ExtractTextPlugin in production to seperate stylesheets
// to prevent flashes of unstyled content
// See https://stackoverflow.com/questions/36453826/how-to-stop-fouc-when-using-css-loaded-by-webpack
// and https://stackoverflow.com/questions/42793077/struggling-to-remove-fouc-flash-of-unstyled-content-when-using-webpack
// and https://survivejs.com/webpack/styling/separating-css/
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [{
    // devServer: {
    //     contentBase: path.resolve(__dirname, './public')
    // },
    entry: "./js/wireframe",
    output: {
        filename: "chunk.js",
        path: BUILD_PATH
    },

    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader", // compiles Sass to CSS,
                options: {
                    includePaths: [path.join(__dirname, "node_modules")]
                }
            }]
            // use: ExtractTextPlugin.extract({
            //     fallback: 'style-loader',
            //     use: ['css-loader', 'sass-loader']
            // })
        }, {
            test: /\.(png|jpg)$/,
            loader: "url-loader"
        }] //,
        // plugins: [
        //     new ExtractTextPlugin('style.css')
        // ]
    }
}, {
    name: "js-all",
    entry: path.join(__dirname, "node_modules/material-components-web"),
    output: {
        path: BUILD_PATH,
        filename: "material-components-web.js",
        libraryTarget: "umd",
        library: "mdc",
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }],
    }
}];
