var connection = require("../config/connection.js");
var orm = {
    selectAll: function () {
        var queryString = "QUERY";
        connection.query(queryString, [], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function () {
        var queryString = "QUERY";
        connection.query(queryString, [], function (err, result) {
            if (err) throw err;
            console.log(result)
        });
    },
    updateOne: function () {
        var queryString = "QUERY";
        connection.query(queryString, [], function (err, result) {
            if (err) throw err;
            console.log(result)
        });
    }

};
module.exports = orm;
