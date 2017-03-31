(function (personnelController) {

    var personnelData = require('../data/personnelData');
        
    personnelController.init = function (app) {        

        app.get('/api/personnel', function(request, response){            

            personnelData.getPersonnel (function (error, personnel) {
                if (error) {
                    response.status(400).send(error);
                } else {
                    console.log ('Persoonel loaded !!');
                    response.set('Content-Type','application/json');
                    response.send(personnel);                        
                }
            });                         
        });
        
    };
})(module.exports);