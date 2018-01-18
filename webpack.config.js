/*modules para browser-sync*/
const BrowserSyncPlugin = require('browser-sync-webpack-plugin'); //browser-sync + webpack
const path = require('path');//Instanciar el inicio y final del camino
/* html-webpack-plugin*/
const HtmlWebpackPlugin = require('html-webpack-plugin');

/* MODULE PARA SASS */
const ExtractTextPlugin = require("extract-text-webpack-plugin");

/* PUG */
// const template = require("./dev/src/index.pug");
// => returns file.pug content as template function 
 
// or, if you've bound .pug to pug-loader 
       
// //---------------------------------------
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
            },
            {
                test: /\.pug$/, //para que compile pug se debe instalar pug
                use: "pug-loader" 
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
        new ExtractTextPlugin({ //para generar el link de css y minificar
            filename: 'css/style.css'
            // disable: false,
            // allChunks: true
        }),
        new HtmlWebpackPlugin({ //para generar el html y minificar
            filename: 'main.html',
            title: 'Webpack is amazing',
            template:"./dev/src/index.pug",
            // minify: {
            //     collapseWhitespace: true
            // },
            hash: true, //añade un hash de numeros despues del nombre del link ej: ?84563216
            chunks: true,
            xhtml: true //generara automaticamente las etiquetas que falten cerrar
        })
    ] //son complementos que pueden mejorar en la optimizacion de paquetes y minificar
}
