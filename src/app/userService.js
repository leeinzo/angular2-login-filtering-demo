// Service used by (imported, or injected, into) the inputForm component, takes a json string formed from the two input fields
//  and inserts them into an array as a record of a user.
var UserModel = (function () {
    function UserModel(id, username, password, activeStatus) {
        if (id === void 0) { id = null; }
        if (username === void 0) { username = ""; }
        if (password === void 0) { password = ""; }
        if (activeStatus === void 0) { activeStatus = false; }
        this.id = id;
        this.username = username;
        this.password = password;
        this.activeStatus = activeStatus;
        this.status = UserModel.ACTIVE;
    }
    // called from userRenderer.ts, sets the status of the user represented by the component
    //  which will be used to apply styling to the component 
    UserModel.prototype.setStatusDeleted = function () {
        this.status = UserModel.DELETED;
    };
    UserModel.prototype.setStatusActive = function () {
        this.status = UserModel.ACTIVE;
    };
    UserModel.ACTIVE = "active";
    UserModel.DELETED = "deleted";
    return UserModel;
})();
exports.UserModel = UserModel;
var UserService = (function () {
    function UserService() {
        // Array of 'UserModel's defined above as class property
        this.users = [
            new UserModel(1, 'dkane', 'password1'),
            new UserModel(2, 'davek', 'password2'),
        ];
    }
    // This method is called when the form on the inputForm component is submitted, passing through the entries in the text
    //  boxes to construct the new user to add to the 'users' array.
    UserService.prototype.addUser = function (newUser) {
        newUser.id = this.users.length + 1;
        newUser.activeStatus = true;
        this.users.push(newUser);
    };
    // Checks if the users Array is empty - used by the userSearch component to decide whether to display or not.
    UserService.prototype.isAnyUsers = function () {
        var anyUsers = false;
        if (this.users.length > 0) {
            anyUsers = true;
        }
        return anyUsers;
    };
    return UserService;
})();
exports.UserService = UserService;
//# sourceMappingURL=userService.js.map