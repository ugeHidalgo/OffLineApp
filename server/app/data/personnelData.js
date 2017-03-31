(function (personnelData){
    personnelData.init = function (app) {

        var mongoose = require ('mongoose'),
            Person = require ('../models/person');
        
        personnelData.getPersonnel = function () {
            Person.find({}, callbackFn);
        }

    };
})(module.exports);
