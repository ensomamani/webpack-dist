
const BrowserSyncPlugin = require('browser-sync-webpack-plugin'); //browser-sync + webpack
const path = require('path'),
      endPath = path.resolve(__dirname, 'dev/js'),
      ExtractTextPlugin = require("extract-text-webpack-plugin"); //Instanciar el inicio y final del camino

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

    
module.exports = {
    resolve: {
        extensions: [".js",".json",".css"]
    },
    entry: './dev/es6/app.js', //entrada del archivo a compilar
    output: {
        path: endPath, //salida del archivo a compilar
        filename: 'app.js' //nombre del archivo final compilado
    },
    // devServer:{ //servidor para local para visualizar la programacion
    //     contentBase: path.join(__dirname, "dist"),
    //     compress: true,
    //     port: 9000
    // },
    module: {
        rules: [
            {   test: /\.js$/, 
                exclude: /node_modules/, 
                use:"babel-loader"
            }, //procesa el tipo de archivo que compila
            {   test:/\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            
            }
        ]
    },
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: '3000',
            server: { baseDir: ['dev']},
            files: ['./dist/index.html','./dist/css','./dist/js']
        }),
        new ExtractTextPlugin("./dev/css/style.css")
    ], //son complementos que pueden mejorar en la optimizacion de paquetes y minificar
}
