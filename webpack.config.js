const path =  require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode:"development",
    entry:{
       main: path.resolve(__dirname, "src/index.js")
    },
    output:{
        path:path.resolve(__dirname, "dist"),
        filename:"[name][contenthash].js",
    },
    module:{
        rules:[
            {
                test: /\.scss$/,
                use:[
                    "style-loader","css-loader","sass-loader"
                ]
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            title:"Webpack App",
            filename: "index.html",
            template: "src/index.html"
        })
    ]
}