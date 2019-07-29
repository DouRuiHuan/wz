module.exports={
    devServer:{
        proxy:{
           "/wy":{
                target:"http://localhost:3000",
                changeOrigin:true,
                pathRewrite:{
                "^/wy":"/"
                }
            }
        }
    }
}

