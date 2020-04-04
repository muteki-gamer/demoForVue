const path = require('path')

const resolve = dir => {
    return path.join(__dirname, dir)
}

module.exports = {
    configureWebpack: {
        entry: {
            vendors: ['vue', 'vue-router', 'axios', 'vuex']
          },
        resolve: {
            alias: {
                '@': resolve('src'),
                'ASSETS': resolve('src/assets'),
                'API': resolve('src/api'),
                'UTIL': resolve('src/util'),
                'COMPONENTS': resolve('src/components'),
                'VIEWS': resolve('src/views'),
                'STORE': resolve('src/store'),
            }
        },

    },
    
}
