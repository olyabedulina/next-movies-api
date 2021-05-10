module.exports = {
    webpack: (config) => {
        config.resolve.extensions.push('.css')
        return config
    }
}
