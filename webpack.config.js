
const BrowserSyncPlugin = require('browser-sync-webpack-plugin'); //browser-sync + webpack
const path = require('path'),
      endPath = path.resolve(__dirname, 'dist/js'); //Instanciar el inicio y final del camino
      

    
module.exports = {
    resolve: {
        extensions: [".js",".json",".css"]
    },
    entry: './src/app.js', //entrada del archivo a compilar
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
            { test: /\.js$/, exclude: /node_modules/, use:"babel-loader"}, //procesa el tipo de archivo que compila
        ]
    },
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: '3000',
            server: { baseDir: ['dev']},
            files: ['./dist/index.html','./dist/css','./dist/js']
        })
    ], //son complementos que pueden mejorar en la optimizacion de paquetes y minificar
}
