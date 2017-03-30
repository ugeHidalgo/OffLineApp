(function (controllers){
    var personnelController = require ('./personnelController');
    var orderController = require ('./orderController');       

    controllers.init = function (app) {
        personnelController.init(app);
        orderController.init(app);        
    };

})(module.exports);