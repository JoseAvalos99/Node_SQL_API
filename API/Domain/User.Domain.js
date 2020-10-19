class User {
    constructor(NameUser, LastName, Email, Password, Phone) {
        this.NameUser = NameUser;
        this.LastName = LastName;
        this.Email = Email;
        this.Password = Password;
        this.Phone = Phone;
    }
}
module.exports = {
    UserDomain: User
}