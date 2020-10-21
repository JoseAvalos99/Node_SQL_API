const UserRepository = require('../Repositories/User.Repository');
const userRepository = new UserRepository();

class UsersController {
    async getAll(req, res) {
        try {
            let users = await userRepository.getAll();
            res.send(users);
        } catch (error) {
            console.error(error);
        }
    }
    async getById(req, res) {
        try {
            let user = await userRepository.getById(req.params.id);
            res.send(user);
        } catch (error) {
            console.log(error);
        }
    }
    async postUser(req, res) {
        try {
            let user = await userRepository.postUser(req.body);
            res.send(user);
        } catch (error) {
            console.log(error);
        }
    }
    async putUser(req, res) {
        try {
            let user = await userRepository.editUser(req.params.id, req.body);
            res.send(user);
        } catch (error) {
            console.log(error);
        }
    }
    async deleteUser(req, res) {
        try {
            let user = await userRepository.deleteUser(req.params.id);
            res.send(user);
        } catch (error) {
            console.log(error);
        }
    }
    async loginUser(req, res) {
        try {
            let userLogin = await userRepository.loginUser(req.body.Email, req.body.Password);
            res.send(userLogin);
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports = UsersController;