const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');
module.exports = {
    entry: './index',
    output: {
        filename: 'index.bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            generateStatsFile: true,
            statsOptions: { source: false }
        }),
    ]
}