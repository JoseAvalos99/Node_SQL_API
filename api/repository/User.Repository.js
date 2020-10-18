const dbOperations = require('../../DataBase/Operations/Users.dbOperations');

class UserRepository {
    async getAll() {
        let users = []
        await dbOperations.getUsers().then(result => {
            result.forEach(element => {
                users.push({ 'NameUser': element.NameUser })
            });
        });
        return users;
    }
    async getById(id) {
        return await dbOperations.getUserById(id).then(result => {
            user = result[0];
        });
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