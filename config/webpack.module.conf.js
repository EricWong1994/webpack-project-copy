module.exports = {
    module:{
        rules: [
            {
                test: /\.js|jsx$/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                // use: ['style-loader', 'css-loader']
                exclude: /node_modules/,
                use: [
                    {
                      loader: 'style-loader',
                    },
                    {
                      loader: 'css-loader',
                      options: {
                        importLoaders: 1,
                      }
                    },
                    {
                      loader: 'postcss-loader'
                    }
                ]
            },
            // {
            //     test: /\.css$/i,
            //     use: [
            //         "style-loader",
            //         "css-loader",
            //         {
            //             loader: "postcss-loader",
            //             options: {
            //                 postcssOptions: {
            //                     plugins: [
            //                         [
            //                             "postcss-preset-env",
            //                             {
            //                                 // Options
            //                             },
            //                         ],
            //                     ],
            //                 },
            //             },
            //         },
            //     ]
            //     //  use: ["style-loader", "css-loader", "postcss-loader"]
            // },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.(png|gif|jpe?g)$/,
                use: [{
                    loader:'url-loader',
                    options:{
                        // 通过`limit`指定进行base64编码的图片大小；只有小于指定字节（byte）的图片才会进行base64编码：
                        limit:10000,
                        outputPath:'static/images'
                    }
                }]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader:'url-loader',
                options: {
                    limit: 10000,
                    name: '[name].[ext]'
                }
            } 
        ]
    }
}