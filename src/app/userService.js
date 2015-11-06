var Rx = require('rx');
// Service used by (imported, or injected, into) the inputForm component, takes a json string formed from the two input fields
//  and inserts them into an array as a record of a user.
var UserModel = (function () {
    function UserModel(id, username, password) {
        if (id === void 0) { id = null; }
        if (username === void 0) { username = ""; }
        if (password === void 0) { password = ""; }
        this.id = id;
        this.username = username;
        this.password = password;
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
// This class combines the array of users and an Rx.Subject object that will fire a message whenever the array is
//   added to  - this seemed like the easiest way to get this working, adapted for ES6 from
//   http://stackoverflow.com/questions/28816691/how-can-i-create-an-observer-over-a-dynamic-list-in-rxjava
var ObservableUserList = (function () {
    function ObservableUserList() {
        this.userList = new Array();
        this.userList.push(new UserModel(1, "davek", "password1"));
        this.userList.push(new UserModel(2, "dkane", "password2"));
        this.onAddUser = new Rx.Subject();
    }
    // When the addUser method is called from the addUser method on the UserService class, the user is pushed to the
    //   array and the Subject object sends out a message with the contents of the updated userList, to be used
    //   by the UserList component
    ObservableUserList.prototype.addUser = function (newUser) {
        if (this.userList.length > 0) {
            newUser.id = this.userList[this.userList.length - 1].id + 1;
        }
        else {
            newUser.id = 1;
        }
        ;
        this.userList.push(newUser);
        this.onAddUser.onNext(this.userList);
    };
    // Returns the onAddUser Subject object for monitoring by its subscribers
    ObservableUserList.prototype.getObservable = function () {
        return this.onAddUser;
    };
    return ObservableUserList;
})();
exports.ObservableUserList = ObservableUserList;
var UserService = (function () {
    function UserService() {
        this.users = new ObservableUserList();
    }
    // Returns a bool signifying whether the users array in ObservableUserList is populated, for use by the user-search
    //   component when deciding whrther to show the search box
    UserService.prototype.isAnyUsers = function () {
        var anyUsers = false;
        if (this.users.userList.length > 0) {
            anyUsers = true;
        }
        return anyUsers;
    };
    // Add a user, calling the assUser method of the ObservableUserList.
    UserService.prototype.addUser = function (newUser) {
        this.users.addUser(newUser);
    };
    return UserService;
})();
exports.UserService = UserService;
//# sourceMappingURL=userService.js.map