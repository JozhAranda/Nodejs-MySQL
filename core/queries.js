
var SQLGETSINGLEDATA = 
		"SELECT * " + 
        "FROM users " +
        "WHERE name = ? " +
        "ORDER BY id " +
        "DESC "
        "LIMIT 1 ";
		
exports.SQLGETSINGLEDATA = SQLGETSINGLEDATA;

var SQLSAVESINGLEDATA = 
		"INSERT INTO users ( " +
		"name, age, phone, profession, datetime) " +
		"VALUES (?, ?, ?, ?, ?)";

exports.SQLSAVESINGLEDATA = SQLSAVESINGLEDATA;