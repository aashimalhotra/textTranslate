const translate = require('google-translate-api');

module.exports=function trans(response,lang,res){
translate(response, {to: lang}).then(function(resp) {
    response=resp.text;
    console.log(response);
    res.json({result:response});
    }).catch(function(err){
        console.error(err);
    });
}
