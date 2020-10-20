var config = require('../dbconfig');
const sql = require('mssql');

async function getUsers() {
    try {
        let pool = await sql.connect(config);
        let request = await pool.request().query("SELECT * FROM Users"); //Query a ejecutar 
        return request.recordset;
    } catch (error) {
        console.log(error);
    }
}
/**
 * Puedo conbinar Query con inputs, pero elegi SPs para mayor seguridad UwU
 */
async function getUserById(userId) {
    try {
        let pool = await sql.connect(config);
        let user = await pool.request()
            .input('Id', sql.Int, userId) //Campo que le voy a enviar
            .execute('GetUserById') //Nombre del SP a ejecutar
        return user.recordset[0];
    } catch (error) {
        console.log(error);
    }
}
async function addUser(user) {
    try {
        let pool = await sql.connect(config);
        let userBD = await pool.request()
            .input('Name', sql.NVarChar(200), user.NameUser)
            .input('LastName', sql.NVarChar(200), user.LastName)
            .input('Email', sql.NVarChar(50), user.Email)
            .input('Password', sql.NVarChar(50), user.Password)
            .input('Phone', sql.NVarChar(50), user.Phone)
            .execute('InsertUser');
        if (userBD.recordset)
            return {
                error: userBD.recordset[0]['MessageError']
            }
        return {
            Id: userBD.recordset[0]['Id'],
            NameUser: user.NameUser,
            LastName: user.LastName,
            Email: user.Email,
            Password: user.Password,
            Phone: user.Phone
        }
    } catch (error) {
        console.log(error);
    }
}
async function editUser(userId, user) {
    try {
        let pool = await sql.connect(config);
        let userBD = await pool.request()
            .input('Id', sql.Int, userId)
            .input('Name', sql.NVarChar(200), user.NameUser)
            .input('LastName', sql.NVarChar(200), user.LastName)
            .input('Email', sql.NVarChar(50), user.Email)
            .input('Password', sql.NVarChar(50), user.Password)
            .input('Phone', sql.NVarChar(50), user.Phone)
            .execute('EditUser');
        return {
            Id: userBD.recordset[0]['Id'],
            NameUser: userBD.recordset[0]['NameUser'],
            LastName: userBD.recordset[0]['LastName'],
            Email: userBD.recordset[0]['Email'],
            Password: userBD.recordset[0]['PasswordUser'],
            Phone: userBD.recordset[0]['Phone'],
        }
    } catch (error) {
        console.log(error);
    }
}
async function deleteUser(userId) {
    try {
        let pool = await sql.connect(config);
        let userDB = await pool.request()
            .input('Id', sql.Int, userId)
            .execute('DeleteUsers');
        return {
            Id: userDB.recordset[0]['Id']
        }
    } catch (error) {
        console.log(error);
    }
}
async function loginUser(email, password) {
    try {
        let pool = await sql.connect(config);
        let userDB = await pool.request()
            .input('Email', sql.NVarChar, email)
            .input('Password', sql.NVarChar, password)
            .execute('LoginUser');
        if (userDB.recordset[0]['MessageError']) {
            return {
                Error: userDB.recordset[0]['MessageError']
            }
        }
        return userDB.recordset;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getUsers: getUsers,
    getUserById: getUserById,
    addUser: addUser,
    editUser: editUser,
    deleteUser: deleteUser,
    loginUser: loginUser
}