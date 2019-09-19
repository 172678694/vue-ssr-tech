//webpack 打包前端资源
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports={
    entry:path.join(__dirname,'src/index.js'),
    output:{
        filename:'bundle.js',
        path:path.join(__dirname,'dist')
    },
    plugins:[new VueLoaderPlugin()],
    module:{
        rules:[
            {
                test:/.vue$/,
                loader:'vue-loader'
            },
            {
                test:/.css$/,
                use:['vue-style-loader','css-loader']
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:1024,
                            name:'[name]-aaa.[ext]'
                        }
                    }
                ]
            },
            {
                test:/\.styl/,
                use:[
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            }
        ]
    }

}