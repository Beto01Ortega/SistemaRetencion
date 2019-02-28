var pdf = require('html-pdf');
var contenido = '<h1>Prueba de creacion de codigo</h1>';


pdf.create(contenido).toFile('./test.pdf',function(err,res){
    if(err){
        console.log(err);
    }else{
        console.log(res);
    }
});

var options = {
    "format":"A4",
    "header":{
        "height":"60px"
    },
    "footer":{
        "heigt":"22mm"
    },
    "base":'file://Users/midesweb/carpeta_base'
};
