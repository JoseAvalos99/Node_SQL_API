const express = require('express');
const router = express.Router();
const UsersController = require('../api/controllers/Users.Controller');
const usersController = new UsersController();

router.get("/All", usersController.getAll);
router.get("/User/:id", usersController.getById);
router.post("/User/", usersController.postUser);
router.put("/User/:id", usersController.putUser);
router.delete("/User/:id", usersController.deleteUser);

router.get("/", (req, res) => {
    res.send("Hola, Sean Todxs Bienvenidxs");

});

module.exports = router;