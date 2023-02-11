const path =  require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode:"development",
    entry:{
       main: path.resolve(__dirname, "src/index.js"),
    },
    output:{
        path:path.resolve(__dirname, "dist"),
        filename:"[name][contenthash].js",
        clean:true
    },
    devServer: {
        static: {directory:path.resolve(__dirname, "dist")},
        port:3000,
        open:true,
        hot:true,
        compress:true,
        historyApiFallback:true
    },
    module:{
        rules:[
            {
                test: /\.scss$/,
                use:[
                    "style-loader","css-loader","sass-loader"
                ]
            },
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
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