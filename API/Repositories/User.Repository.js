const dbOperations = require('../../DataBase/Operations/Users.dbOperations');

class UserRepository {
    async getAll() {
        let users = []
        return await dbOperations.getUsers();
    }
    async getById(id) {
        return await dbOperations.getUserById(id);
    }
    async postUser(user) {
        return await dbOperations.addUser(user);
    }
    async editUser(id, userData) {
        return await dbOperations.editUser(id, userData);
    }
    async deleteUser(id) {
        return await dbOperations.deleteUser(id);
    }
}
module.exports = UserRepository;