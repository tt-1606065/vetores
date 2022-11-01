// Importações
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

// Configurações do Webpack
module.exports = {
    // Configuração do servidor (A extenção live server faz exatamente isto)
    devServer: {
        static: path.join(__dirname, './'), // Abrindo o arquivo index.html da raiz
        port: 3000 // Disponibilizando a porta 300 da nossa máquina para o servidor NodeJS
    },
    entry: path.resolve(__dirname, './', 'main.js'), // Arquivo que o webpack vai iniciar a ler
    output: { // Pasta e arquivo que será enviada a compilação do seu projeto em uma build
        filename: '[name]-[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    // Modo - development ou production
    mode: 'development',
    target: 'web',
    // Regras para carregamento de módulos (js, typescript, css, scss, etc)
    module: {
        rules: [
            {
                test: /\.js$/, // Pegando todos arquivos que terminam com .js
                exclude: /node_modules/, // Ignora a pasta node_modules
                loader: 'babel-loader'
            },
            {
                test: /\.s(a|c)ss$/, // Pegando todos os arquivos sass, scss ou css
                exclude: /node_modules/, // Ignora a pasta node_modules
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        // options: {
                        //     importLoaders: 1,
                        //     modules: true
                        // }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        // Plugin para injetar o bundle no arquivo HTML
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "./", 'index.html')
        }),
    ]
}