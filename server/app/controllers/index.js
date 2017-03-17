(function (controllers){
    var personnelController = require ('./personnelController');        

    controllers.init = function (app) {
        personnelController.init(app);        
    };

})(module.exports);