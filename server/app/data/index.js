(function (data){

    var personnelData = require ('./personnelData');
    var orderData = require ('./orderData');

    personnelData.init();
    orderData.init();

})(module.exports);