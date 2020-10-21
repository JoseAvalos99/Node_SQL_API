var config = require('../dbconfig');
const sql = require('mssql');

async function saveMD5Translate(plainText, MD5Translation) {
    try {
        let pool = await sql.connect(config);
        let request = await pool.request()
            .input('Sentence', sql.NVarChar, plainText)
            .input('EncryptTranslateMD5', sql.NVarChar, MD5Translation)
            .execute('InsertMD5');
        return request.recordset;
    } catch (error) {
        console.log(error);
    }
}
async function getMD5Translate(MD5Translation) {
    try {
        let pool = await sql.connect(config);
        let request = await pool.request()
            .input('EncryptTranslateMD5', sql.NVarChar, MD5Translation)
            .execute('GetMD5Translate');
        return request.recordset[0];
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    saveMD5Translate: saveMD5Translate,
    getMD5Translate: getMD5Translate
}