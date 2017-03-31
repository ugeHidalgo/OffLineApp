(function (orderController) {

    var orderData = require('../data/orderData');
        
    orderController.init = function (app) {        

        app.get('/api/orders', function(request, response){            
            
            orderData.getOrders (function (error, orders) {
                if (error) {
                    response.status(400).send(error);
                } else {
                    console.log ('Order list loaded !!');
                    response.set('Content-Type','application/json');
                    response.send(orders);                        
                }
            });            
        });

    };
})(module.exports);