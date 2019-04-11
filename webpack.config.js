const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

const config =  {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname + 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: __dirname + '/dist'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}

module.exports = config;