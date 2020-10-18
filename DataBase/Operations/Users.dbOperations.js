var config = require('../dbconfig');
const sql = require('mssql');

async function getUsers() {
    try {
        let pool = await sql.connect(config);
        // let connectionPool = new sql.ConnectionPool(config);
        let request = await pool.request().query("SELECT * FROM Users");
        return request.recordset;
    } catch (error) {
        console.log(error);
    }
}
async function getUserById(userId) {
    try {
        let pool = await sql.connect(config);
        let user = await pool.request()
            .input('input_parameter', sql.Int, userId)
            .query('Select * from Users Where Id = @input_parameter');
        return user.recordset;
    } catch (error) {
        console.log(error);
    }
}
async function addUser(user) {
    try {
        let pool = await sql.connect(config);
        let userBD = await pool.request()
            .input('NameUser', sql.NVarChar, user.NameUser)
            .input('LastName', sql.NVarChar, user.LastName)
            .query('insert into Users OUTPUT inserted.Id values(@NameUser, @LastName)');
        return {
            Id: userBD.recordset[0]['Id'],
            NameUser: user.NameUser,
            LastName: user.LastName
        }
    } catch (error) {
        console.log(error);
    }
}
async function editUser(userId, user) {
    try {
        let pool = await sql.connect(config);
        let userBD = await pool.request()
            .input('NameUser', sql.NVarChar, user.NameUser)
            .input('LastName', sql.NVarChar, user.LastName)
            .input('IdUser', sql.Int, userId)
            .query('Update Users set NameUser = @NameUser, LastName = @LastName OUTPUT inserted.Id WHERE Id = @IdUser');
        return {
            Id: userBD.recordset[0]['Id'],
            NameUser: user.NameUser,
            LastName: user.LastName
        };
    } catch (error) {
        console.log(error);
    }
}
async function deleteUser(userId) {
    try {
        let pool = await sql.connect(config);
        let userDB = await pool.request()
            .input('IdUser', sql.Int, userId)
            .query('delete from Users OUTPUT deleted.Id where Id = @IdUser');
        return {
            Id: userDB.recordset[0]['Id']
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getUsers: getUsers,
    getUserById: getUserById,
    addUser: addUser,
    editUser: editUser,
    deleteUser: deleteUser
}