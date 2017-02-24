const translate = require('google-translate-api');

translate('hello how are you', {to: 'es'}).then(function(res) {
    console.log(res.text);
    //=> I speak English
}).catch(function(err){
    console.error(err);
});
