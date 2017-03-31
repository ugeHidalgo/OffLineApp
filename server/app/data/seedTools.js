(function (seedTools) {

    var seedData = require ('./seedData'),
        mongoose = require ('mongoose'),
        Order = require ('../models/order'),
        Person = require ('../models/person');

    
    seedTools.seedDataBase = function  () {
        seedOrderData().then (function (){
            seedPersonnelData().then (function (){
                console.log ('0 - All data seeded');
            });
        });    
    };


    function seedPersonnelData () {
        return new Promise (function (resolve, reject ){
            var personnel, newPerson, itemsLeft;

            console.log ('2 - Checking if exist personnel data.');
            Person.find ({}, function(error, personnel) {
                if (error){
                    console.log ('Failed to count personnel in database: ' + error);
                } else {
                    if (personnel.length===0) {
                        itemsLeft = seedData.initialPersonnel.length;
                        console.log ('Seeding personnel data into database.');
                        seedData.initialPersonnel.forEach (function (person) {
                            itemsLeft--;
                            newPerson = new Person(person);
                            newPerson.save(function (error){
                                if (error){
                                    console.log ('Failed to insert person in database: ' + error);
                                    reject();
                                } else {
                                    console.log ('Person added to database. ' + itemsLeft);
                                    if (itemsLeft === 0){
                                        resolve();
                                    }
                                }
                            });
                        });
                } else {
                    console.log ('Personnel database already seeded.');
                    resolve();
                };
              }
            });
        });
    };
        
    function seedOrderData () {
        return new Promise (function (resolve, reject ){
            var orders, newOrder, itemsLeft;

            console.log ('1 - Checking if exist order data.');
            Order.find ({}, function(error, orders) {
                if (error){
                    console.log ('Failed to count orders in database: ' + error);
                } else {
                    if (orders.length===0) {
                        itemsLeft = seedData.initialOrders.length;
                        console.log ('Seeding orders data into database.');
                        seedData.initialOrders.forEach (function (order) {
                            itemsLeft--;
                            newOrder = new Order(order);
                            newOrder.save(function (error){
                                if (error){
                                    console.log ('Failed to insert order in database: ' + error);
                                    reject();
                                } else {
                                    console.log ('Order added to database. ' + itemsLeft);
                                    if (itemsLeft === 0){
                                        resolve();
                                    }
                                }
                            });
                        });
                } else {
                    console.log ('Orders database already seeded.');
                    resolve();
                };
              }
            });
        });
    };
    

})(module.exports);