(function (orderController) {

    var orderData = require('../data/orderData');
        
    orderController.init = function (app) {        

        app.get('/api/order', function(request, response){            

            var orderList = orderData.getOrderList ();
            console.log ('Order list loaded !!');
            response.set('Content-Type','application/json');
            response.send(orderList);                        
        });
        
    };

})(module.exports);