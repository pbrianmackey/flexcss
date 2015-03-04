var path = require("path");
var webpack = require("webpack");
module.exports = {
    watch: false,
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?experimental&optional=runtime&sourceMap=inline'
            }
        ]
    },
    resolve: {
        // add bower components and main source to resolved
        root: [path.join(__dirname, "bower_components"),
            path.join(__dirname, 'src/main')]
    },
    output: {
        filename: 'app.js',
        libraryTarget: 'umd',
        library: 'FlexCss',
        sourceMapFilename: 'app.map'
    },
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        ),
        new webpack.optimize.UglifyJsPlugin()
    ]
};