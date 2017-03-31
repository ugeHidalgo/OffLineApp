(function (orderData){
    orderData.init = function (app) {

        var mongoose = require ('mongoose'),
            Order = require ('../models/order');

        orderData.getOrders = function (callbackFn) {
             Order.find({}, callbackFn);
        };

    };
})(module.exports);