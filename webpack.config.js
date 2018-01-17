/*modules para browser-sync*/
const BrowserSyncPlugin = require('browser-sync-webpack-plugin'); //browser-sync + webpack
const path = require('path');//Instanciar el inicio y final del camino
/* html-webpack-plugin*/
const HtmlWebpackPlugin = require('html-webpack-plugin');
//       webpackConfig = {
//         entry: './dev/src/index.html',
//         output: {
//             path: path.resolve(__dirname,'./dev/dist'),
//             filename: '/js/app.js'
//         },
//     plugins : [
//         new HtmlWebpackPlugin({
//             title: 'Webpack',
//             template: './dev/src/index.html',
//             minify: {
//                 caseSensitive: true
//             },
//             hash: true,
//             chunks: true,
//             xhtml: true
//         })
//     ]
// };
/* MODULE PARA SASS */
const ExtractTextPlugin = require("extract-text-webpack-plugin");

//---------------------------------------
module.exports = {
    resolve: {
        extensions: [".js", ".json", ".css"]
    },
    entry: ['./dev/src/app.js'], //entrada del archivo a compilar
    output: {
        path: path.resolve(__dirname,'./dev/dist'), //salida del archivo a compilar
        filename: 'js/app.js', //nombre del archivo final compilado
        publicPath: '/dist/' //siempre debe ir un slash al final
    },
    devtool: "source-map",
    devServer:{ //servidor local para visualizar la programacion
        contentBase: path.join(__dirname, "dev/dist/"),
        compress: true,
        port: 9000,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }, //procesa el tipo de archivo que compila
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({ //para generar link de css en html se necesita el ExtractTextPlugin
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ],
                    publicPath: 'dev/dist/css' //aqui es donde se asegura que el archivo va compilar 
                })
            }
        ]
    },
    plugins: [
        // new BrowserSyncPlugin({
        //     host: 'localhost',
        //     port: '3000',
        //     server: { baseDir: ['dev/'] },
        //     files: ['./dev/index.html', './dev/dist/js/app.js']
        // }),
        new ExtractTextPlugin({
            filename: 'css/style.css'
        }),
        new HtmlWebpackPlugin({
            title: 'Webpack',
            template: './dev/src/index.html',
            minify: {
                caseSensitive: true
            },
            hash: true,
            allChunks: true,
            xhtml: true
        })
    ] //son complementos que pueden mejorar en la optimizacion de paquetes y minificar
}
