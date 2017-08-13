// webpack.config.js

const path = require("path");

module.exports = [{

    entry: "./js/wireframe",
    output: {
        filename: "chunk.js",
        path: path.join(__dirname, "build")
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
        }, {
            test: /\.(png|jpg)$/,
            loader: "url-loader"
        }]
    }
}, {
    name: "js-all",
    entry: path.join(__dirname, "node_modules/material-components-web"),
    output: {
        path: path.join(__dirname, "build"),
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
