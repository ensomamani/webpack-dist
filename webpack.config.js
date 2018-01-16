/*modules para browser-sync*/
const BrowserSyncPlugin = require('browser-sync-webpack-plugin'); //browser-sync + webpack

const path = require('path'),
    endPath = path.resolve(__dirname, 'dev/dist'), //Instanciar el inicio y final del camino
    publicPath = path.resolve(__dirname, 'dev/dist');


/* MODULE PARA SASS */
const endPathcss = path.resolve(__dirname, 'dev/css'),
    // extractSass = new ExtractTextPlugin({
    //     filename: "[name].[contenthash].css",
    //     disable: process.env.NODE_ENV === "development"
    // }),
    ExtractTextPlugin = require("extract-text-webpack-plugin");
// const css = require('!css-loader!resolve-url-loader!sass-loader?sourceMap!./dev/scss/header.scss');

//---------------------------------------
module.exports = {
    resolve: {
        extensions: [".js", ".json", ".css"]
    },
    entry: ['./dev/dist/es6/app.js'], //entrada del archivo a compilar
    output: {
        path: endPath, //salida del archivo a compilar
        filename: 'js/app.js', //nombre del archivo final compilado
        publicPath: publicPath
    },
    devtool: "source-map",
    // devServer:{ //servidor para local para visualizar la programacion
    //     contentBase: path.join(__dirname, "dist"),
    //     compress: true,
    //     port: 9000
    // },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }, //procesa el tipo de archivo que compila
            // {
            //     test: /\.css$/,
            //     use: [{
            //         loader: 'style-loader'
            //     },
            //     {
            //         loader: 'css-loader'
            //     }
            //     ]
            // },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ],
                    publicPath: 'dev/dist/css' //aqui es donde se asegura que el archivo va compilar 
                })
            }
        ]
    },
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: '3000',
            server: { baseDir: ['dev/dist'] },
            files: ['./dev/dist/index.html', './dev/dist/js/app.js']
        }),
        new ExtractTextPlugin({
            filename: 'css/style.css'
        })
    ] //son complementos que pueden mejorar en la optimizacion de paquetes y minificar
}
