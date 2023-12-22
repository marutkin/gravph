const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcPath = path.resolve(__dirname, './src');
const distPath = path.resolve(__dirname, './dist');
const assetsPath = path.resolve(__dirname, 'assets');

const lessLoaderWithOptions = {
    loader: 'less-loader',
    options: {
        lessOptions: {
            javascriptEnabled: true,
        },
    },
};

module.exports = {
    entry: './src/index.tsx',
    devServer: {
        static: {
            directory: assetsPath,
        },
        compress: false,
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                include: srcPath,
                test: /\.((c|le)ss)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: '[name]--[local]',
                                mode: 'local',
                            },
                        },
                    },
                    'postcss-loader',
                    lessLoaderWithOptions,
                ],
            },
            {
                exclude: srcPath,
                test: /\.((c|le)ss)$/,
                use: ['style-loader', 'css-loader', lessLoaderWithOptions],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.less'],
        modules: ['node_modules', srcPath],
        fallback: { "assert": false, 'url': false }
    },
    output: {
        path: distPath,
        filename: '[name].bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/app/index.html',
        }),
    ],
};