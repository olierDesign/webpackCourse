const path = require("path");
import webpack from "webpack";
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // 入口：有并且可以有多个
    entry: {
        main: ["./src/main.js"]
    },
    // 打包环境：开发 & 生产
    mode: "development",
    // 出口：有且只能有一个
    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/"
    },
    // 本地服务器
    devServer: {
        contentBase: "dist",
        hot: true,
        overlay: true
    },
    // 本地调试工具
    devtool: "source-map",
    module: {
        rules: [
            // js loaders
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ],
                exclude: /node_modules/
            },
            // css loaders
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            // sass loaders
            {
                test: /\.sass$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            // stylus loaders
            {
                test: /\.styl$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "postcss-loader"
                    },
                    {
                        loader: "stylus-loader"
                    }
                ]
            },
            // less loaders
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "less-loader"
                    }
                ]
            },
            // html loaders
            // 1、html-loader：找到 html 文件
            // 2、extract-loader：跟打包的出口文件分离
            // 3、file-loader：对分离出来的 html 文件进行起名
            // 4、HTMLWebpackPlugin = html-loader + extract-loader
            {
                test: /\.html$/,
                use: [
                    // {
                    //     loader: "file-loader",
                    //     options: {
                    //         name: "[name].html"
                    //     }
                    // },
                    // {
                    //     loader: "extract-loader"
                    // },
                    {
                        loader: "html-loader",
                        options: {
                            attrs: ["img:src"]
                        }
                    }
                ]
            },
            // image loader
            {
                test: /\.(jpg|jpeg|gif|png)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "images/[name]-[hash:8].[ext]"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        })
    ]
}