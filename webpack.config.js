/*modules para browser-sync*/

const BrowserSyncPlugin = require('browser-sync-webpack-plugin'); //browser-sync + webpack
const path = require('path');//Instanciar el inicio y final del camino
/* html-webpack-plugin*/
const HtmlWebpackPlugin = require('html-webpack-plugin');

/* MODULE PARA SASS */
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';
const webpack = require('webpack')
/* PUG */
// const template = require("./dev/src/index.pug");
// => returns file.pug content as template function 

// or, if you've bound .pug to pug-loader 

// //---------------------------------------
module.exports = {
    mode: "development",
    resolve: {
        extensions: [".js", ".json", ".css",".scss"]
    },
    entry: ['./dev/js/app.js'], //entrada del archivo a compilar
    output: {
        path: path.resolve(__dirname, 'dist/'), //salida de todos los archivo a compilar
        filename: 'js/app.js'//nombre del archivo final compilado
        // publicPath: '/' // para que entienda donde es la raiz
    },
    watch: true,
    //devtool: "source-map",
    devServer: { //servidor local para visualizar la programacion
        contentBase: path.join(__dirname, "dist/"),
        compress: true,
        port: 7070,
        open: true
    },
    mode: 'production',
    module: {
        rules: [
            // {
            //     test: /\.css$/,
            //     use:ExtractTextPlugin.extract({
            //         fallback: "style-loader",
            //         use: 'css-loader'
            //     })
            // },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        minified: false
                    }
                }
            }, //procesa el tipo de archivo que compila
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    { loader: 'resolve-url-loader',
                        options:{

                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            // includePaths: [path.resolve(__home, "src/style"),]
                            sourceMap: true,
                            sourceMapContents: false,
                            
                        }
                    },
                ]
              
            },
            // {
            //     test: /\.scss$/,
            //     use: ExtractTextPlugin.extract({ //para generar link de css en html se necesita el ExtractTextPlugin
            //         fallback: "style-loader",
            //         use: [{
            //             loader: 'css-loader' , 
            //             options: {
            //                 url: false,
            //                 minimize: true,
            //                 sourceMap: true
            //             }
            //         },
            //         // {
            //         //     loader: 'resolve-url-loade'
            //         // },
            //     {
            //         loader: 'sass-loader',
            //         options: {
            //             sourceMap: true
            //         }
            //     }
            //     ],
            //          publicPath: '../' //aqui es donde se asegura que el archivo va compilar 
            //     })
            // },
            {
                test: /\.pug$/, //para que compile pug se debe instalar pug
                use: ["pug-loader"]
            },

            {
                test: /\.(png|jpg|svg|woff|woff2|eot|ttf)$/, //este loader reconoce los siguientes formatos que se trabajaran en webpack
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name(file) {
                                if (process.env === 'production') {
                                    return 'assets/[path][name].[ext]'
                                } else {
                                    return 'assets/[hash].[ext]'
                                }
                            }, 
                            publicPath: '../', //le decimos en que carpeta principal estara junto con el css y html
                            //outputPath: 'img/' //en la carpeta img se guardara las imagenes
                        }
                    },
                    {
                        loader: 'image-webpack-loader', //loader para minificar imagenes
                        // options: {
                        //     bypassOnDebug: true
                        // }
                    }
                ]
            }
        ]
    },
    plugins: [
        // new BrowserSyncPlugin({
        //     host: 'localhost',
        //     port: '7001',
        //     server: { baseDir: ['dev/'] },
        //     files: ['dev/dist/html/index.html']
        // }),
        // new ExtractTextPlugin({ //para generar el link de css y minificar
        //     filename: 'css/style.css'
        //     // disable: false,
        //     // allChunks: true
        // }),

        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[id].css',
            
        }),
        new HtmlWebpackPlugin({ //para generar el html y minificar
            filename: 'index.html',
            template: "./dev/index.pug",
            // minify: {
            //      collapseWhitespace: false
            // },
            // hash: true, //añade un hash de numeros despues del nombre del link ej: ?84563216
            // chunks: true,
            // xhtml: true //generara automaticamente las etiquetas que falten cerrar
        })
    ] //son complementos que pueden mejorar en la optimizacion de paquetes y minificar
}
