(function (orderData){
    orderData.init = function (app) {
        
        orderData.getOrderList = function () {
            return [{
                "orderId": "123456",
                "description": "Plumbing for 10 houses",
                "amount": 12000,
                "payment": true
            },{
                "orderId": "123457",
                "description": "Scafolding for 10 houses",
                "amount": 25600,
                "payment": false
            },{
                "orderId": "123458",
                "description": "Electricity and TV for 10 houses",
                "amount": 345040,
                "payment": false
            },{
                "orderId": "123459",
                "description": "Roofing for 10 houses",
                "amount": 234500,
                "payment": false
            }];
        }
    };

})(module.exports);