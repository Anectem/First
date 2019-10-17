const path = require('path');
const webpack = require('webpack');
var AssetsPlugin = require('assets-webpack-plugin');
var assetsPluginInstance = new AssetsPlugin();
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'app': './src/main.ts'
    },
    output: {
        path: path.resolve(__dirname, './public'),     // путь к каталогу выходных файлов - папка public
        publicPath: '/public/',
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
                loaders: ['to-string-loader', 'css-loader']
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src']
                    }
                }
            }
        ]
    },
    plugins: [
        assetsPluginInstance,
        new CopyWebpackPlugin([
            { from: { glob: "**/*.json" } },
        ], { ignore: ['${relative(appPath, appResourcesFullPath)}/**'] }),
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core/,
            path.resolve(__dirname, 'src'), // каталог с исходными файлами
            {} // карта маршрутов
        ),
    ]
};
