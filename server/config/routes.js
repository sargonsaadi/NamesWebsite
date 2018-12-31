var names = require('../controllers/names.js')

module.exports = function(app){
    // app.get('/api/v1/names',names.getall); // <- OLD VERSION
    // app.get('/api/v2/names/:user_id',names.getall2);
    // app.get('/api/v3/names/:user_id',names.getall3);
    // app.get('/api/v4/names',names.getall4);
    app.get('/api/v5/names',names.getall5);
    app.get('/api/v5/names/search',names.getSearch)
    // app.get('/api/v1/names/:name_id/rating/:star',names.addrating); // <- DEV VERSION
    // app.get('/api/v1/new/:newname/:gender',names.addname);  // <- DEV VERSION
    // app.put('/api/v1/names/:word_id',names.update);
    // app.put('/api/v2/names/:word_id',names.update2);
    app.put('/api/v3/names/:word_id',names.update3);
    app.get('/api/v2/names/categories/:word_id',names.getCats);
    app.get('/api/v2/names/check',names.check);
    app.post('/api/v2/names',names.addName);

    app.delete('/api/v1/names/:word_id',names.delete);
    
    // LOGIN-REG
    app.post('/api/v2/reg',names.reg);
    app.post('/api/v2/login',names.login);
    app.delete('/api/v2/logout',names.logout);
}   