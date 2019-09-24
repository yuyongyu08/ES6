let path = require('path');
const ES3ifyPlugin = require('es3ify-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: {
        index: './14-Iterator/src/index.js',
    },
    output: {
        path: path.resolve(__dirname, './14-Iterator/build'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.(js)$/,
                loader: 'babel-loader?cacheDirectory=true',
                exclude: path.resolve(__dirname, "../node_modules")
            },
            // {
            //     test: /\.js$/,
            //     include: /node_modules/,
            //     loader: 'es3ify-loader'
            // }
        ]
    },
    plugins: [
        new ES3ifyPlugin() //es3兼容
    ]
};