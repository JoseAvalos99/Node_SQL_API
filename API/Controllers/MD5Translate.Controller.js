const MD5TranslateRepository = require('../Repositories/Encrypt.Repository');
const mD5TranslateRepository = new MD5TranslateRepository();

class MD5TranslateController {
    async postAndSave(req, res) {
        try {
            let cryp = await mD5TranslateRepository.encryptAndSave(req.body.PlainText);
            res.send(cryp);
        } catch (error) {
            console.log(error);
        }
    }
    async getDecryptLibrary(req, res) {
        try {
            let cryp = await mD5TranslateRepository.decryptByLibrary(req.body.EncryptTranslateMD5);
            res.send(cryp);
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports = MD5TranslateController;