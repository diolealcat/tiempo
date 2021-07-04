/*  COMANDOS

npx webpack serve = comando de consola que levanta el servidor
npx webpack = comando de consola y crea el bundle(minificacion)
npx webpack --mode=development = comando para cargar el objeto mode con valor 'production' 
npx webpack --mode=production = comando para cargar el objeto mode con valor 'production' 
*/

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const p = 'production';
const d = 'development';

module.exports = {
    mode: d, // npx webpack --mode=d = compilacion en modo desarrollo 
    mode: p, // npx webpack --mode=p = compilacion en modo produccion 
    entry : './src/app/main.js',
    output: {
        path: __dirname + '/dist',  
        filename: 'bundle.js'
    },
    module: {
        rules: [          
            {
                use: ["style-loader", "css-loader", "sass-loader"],
                test: /\.(css|sass|scss)$/,
            },
            {
                type: "asset",
                test: /\.(png|svg|jpg|jpge|gif)$/i,
            },
            {
                test: /\.html$/i,
                loader: 'html-loader'
            }
        ],
    },        
    plugins:[
        new HtmlWebpackPlugin({ // creando un nuevo archivo
            template: './src/index.html',
            minify: {
                collapseWhitespace: true,
                keepClosingSlash: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            },
        })        
    ] 
    
}