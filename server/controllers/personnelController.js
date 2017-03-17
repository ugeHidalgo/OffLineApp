(function (personnelController) {

    var personnelData = require('../data/personnelData');
        
    personnelController.init = function (app) {        

        app.get('/api/personnel', function(request, response){            

            var personnelList = personnelData.getPersonnelList ();
            console.log ('Personnel list loaded !!');
            response.set('Content-Type','application/json');
            response.send(personnelList);                        
        });
        
    };

})(module.exports);