const dbOperations = require('../../DataBase/Operations/MD5.dbOperations');
const crypto = require('crypto');

class MD5TranslateRepository {
    async encryptAndSave(textPlain) {
        try {
            const encrypt = crypto.createHash('md5').update(textPlain).digest("hex");
            return await dbOperations.saveMD5Translate(textPlain, encrypt);
        } catch (error) {
            console.log(error);
        }
    }
    async decryptByLibrary(MD5Translation) {
        try {
            return await dbOperations.getMD5Translate(MD5Translation);
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports = MD5TranslateRepository;