const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");



module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'app': './src/main.ts',
        'styles':"./src/styles.css"
    },
    output: {
        path: path.resolve(__dirname, 'public'),     // путь к каталогу выходных файлов - папка public
        publicPath: '',
        filename: "[name].js"       // название создаваемого файла
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [   //загрузчик для ts
            {
                test: /\.ts$/, // определяем тип файлов
                use: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: {configFileName: path.resolve(__dirname, 'tsconfig.json')}
                    },
                    'angular2-template-loader'
                ]

            },
            {
                test: /\.css$/,
                use: ['to-string-loader','style-loader', 'css-loader']
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src']
                    }
                }
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: './',
                            useRelativePath: true
                        }
                    },
                    {
                        loader: "image-webpack-loader"
                    }
                ],
            }
        ]
    },


    plugins: [
        new CopyWebpackPlugin([
            {
                from: 'src/assets/i18n',
                to: 'src/assets/i18n'
            },
        ], {
            ignore: [{
                dots: true,
                glob: 'node_modules/**/*'
            }]
        }),
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core/,
            path.resolve(__dirname, 'src'), // каталог с исходными файлами
            {} // карта маршрутов
        ),
        new HtmlWebpackPlugin({
            template: "src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
    ]
};
