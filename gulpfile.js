const gulp = require('gulp')


function funcaoPadrao(callback){
    setTimeout(function(){
        console.log("Executando via Gulp")
        callback();
    },2000)
    
}

function dizOi(callback) {
    console.log("ola gulp")
    dizTchau()
    callback()
    
}

function dizTchau(){
    console.log("tchau gulp")
}

exports.series = gulp.series(funcaoPadrao,dizOi)
exports.default = gulp.parallel(funcaoPadrao,dizOi)
exports.dizOi = dizOi