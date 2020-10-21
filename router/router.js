const express = require('express');
const router = express.Router();
const UsersController = require('../API/Controllers/Users.Controller');
const usersController = new UsersController();
const MD5TranslateController = require('../API/Controllers/MD5Translate.Controller');
const mD5TranslateController = new MD5TranslateController();

router.get("/Users/All", usersController.getAll);
router.get("/Users/:id", usersController.getById);
router.post("/Users", usersController.postUser);
router.put("/Users/:id", usersController.putUser);
router.delete("/Users/:id", usersController.deleteUser);
router.post("/Users/Login", usersController.loginUser);
router.post("/Users/Encrypt", mD5TranslateController.postAndSave);
router.post("/Users/Decrypt", mD5TranslateController.getDecryptLibrary);

router.get("/", (req, res) => {
    res.send("Hola, Sean Todxs Bienvenidxs");

});

module.exports = router;