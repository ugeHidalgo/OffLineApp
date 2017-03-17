var serverUrl = 'http://localhost:8082';
var request = require('request');

describe('personnelController tests', function() {

    describe('when getting personnel list', function() {

        it('should return a 200 status ', function(done) {

            var url = serverUrl + '/api/personnel';
            request.get(url, function(error, response, body) { 
                if (error) console.log(error.message);
                expect(response.statusCode).toBe(200);
                done();
            });
        });

        it('should return a personnel list', function(done) {

            var url = serverUrl + '/api/personnel';
            var data;
            request.get(url, function(error, response, body) {
                if (error) console.log(error.message);
                data = JSON.parse(body);
                expect(data.length).toBe(8);
                done();
            });
        });

    });

});