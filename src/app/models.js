var User = (function () {
    function User(
        // public id: number = null,
        username, password, activeStatus) {
        if (username === void 0) { username = ""; }
        if (password === void 0) { password = ""; }
        if (activeStatus === void 0) { activeStatus = false; }
        this.username = username;
        this.password = password;
        this.activeStatus = activeStatus;
        this.status = User.ACTIVE;
    }
    // called from userRenderer.ts, sets the status of the user represented by the component
    //  which will be used to apply styling to the component
    User.prototype.setStatusDeleted = function () {
        this.status = User.DELETED;
    };
    User.prototype.setStatusActive = function () {
        this.status = User.ACTIVE;
    };
    User.ACTIVE = "active";
    User.DELETED = "deleted";
    return User;
})();
exports.User = User;
//# sourceMappingURL=models.js.map