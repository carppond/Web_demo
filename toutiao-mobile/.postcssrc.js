module.exports = {
     plugins: {
          'autoprefixer': {
               browsers: ['Android >= 4.0', 'iOS >= 8']
          },
          'postcss-pxtorem': {
               // {file} :参数解构,获取参数对象中 file 字段
               rootValue ({file}){
                    return file.indexOf('vant') !== -1 ? 37.5 : 75
               },

               propList: ['*']
          }
     }
}

